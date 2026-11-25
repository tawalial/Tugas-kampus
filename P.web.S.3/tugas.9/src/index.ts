import { Hono } from 'hono'

interface TaskItem {
  id: number
  title: string
  category: string
  completed: boolean
}

const app = new Hono()

let taskList: TaskItem[] = [
  { id: 101, title: 'Merangkum materi routing Hono', category: 'Pemrograman Web', completed: true },
  { id: 102, title: 'Konfigurasi subnetting jaringan', category: 'Jaringan Komputer', completed: false },
  { id: 103, title: 'Uji endpoint API dengan REST Client', category: 'Pemrograman Web', completed: false },
  { id: 104, title: 'Review struktur database relasional', category: 'Basis Data', completed: true },
]

// Endpoint utama untuk memastikan server aktif
app.get('/', (c) => {
  return c.json({
    status: 'online',
    service: 'Task Manager API - Hono',
  })
})

// Menampilkan semua tugas (mendukung filter ?completed=true/false)
app.get('/tasks', (c) => {
  const completedQuery = c.req.query('completed')

  if (completedQuery === 'true' || completedQuery === 'false') {
    const isCompleted = completedQuery === 'true'
    const filtered = taskList.filter((task) => task.completed === isCompleted)
    return c.json({ total: filtered.length, data: filtered })
  }

  return c.json({ total: taskList.length, data: taskList })
})

// Menampilkan detail satu tugas berdasarkan parameter ID
app.get('/tasks/:id', (c) => {
  const taskId = Number(c.req.param('id'))
  const foundTask = taskList.find((task) => task.id === taskId)

  if (!foundTask) {
    return c.json({ error: 'Data tugas dengan ID tersebut tidak ditemukan' }, 404)
  }

  return c.json({ data: foundTask })
})

// Menambahkan tugas baru ke dalam daftar
app.post('/tasks', async (c) => {
  const payload = await c.req.json<{
    title?: string
    category?: string
    completed?: boolean
  }>()

  if (!payload.title || payload.title.trim() === '') {
    return c.json({ error: 'Judul tugas (title) tidak boleh kosong' }, 400)
  }

  const generatedId =
    taskList.length > 0 ? Math.max(...taskList.map((item) => item.id)) + 1 : 101

  const createdTask: TaskItem = {
    id: generatedId,
    title: payload.title.trim(),
    category: payload.category?.trim() || 'Umum',
    completed: Boolean(payload.completed),
  }

  taskList.push(createdTask)
  return c.json({ message: 'Tugas berhasil ditambahkan', data: createdTask }, 201)
})

// Memperbarui data tugas secara menyeluruh berdasarkan ID
app.put('/tasks/:id', async (c) => {
  const taskId = Number(c.req.param('id'))
  const targetIndex = taskList.findIndex((task) => task.id === taskId)

  if (targetIndex === -1) {
    return c.json({ error: 'Data tugas tidak ditemukan' }, 404)
  }

  const payload = await c.req.json<{
    title?: string
    category?: string
    completed?: boolean
  }>()

  taskList[targetIndex] = {
    ...taskList[targetIndex],
    title: payload.title ? payload.title.trim() : taskList[targetIndex].title,
    category: payload.category ? payload.category.trim() : taskList[targetIndex].category,
    completed:
      typeof payload.completed === 'boolean'
        ? payload.completed
        : taskList[targetIndex].completed,
  }

  return c.json({ message: 'Tugas berhasil diperbarui', data: taskList[targetIndex] })
})

// Mengubah status completed (true <-> false) secara cepat
app.patch('/tasks/:id/toggle', (c) => {
  const taskId = Number(c.req.param('id'))
  const targetTask = taskList.find((task) => task.id === taskId)

  if (!targetTask) {
    return c.json({ error: 'Data tugas tidak ditemukan' }, 404)
  }

  targetTask.completed = !targetTask.completed
  return c.json({ message: 'Status tugas diubah', data: targetTask })
})

// Menghapus tugas berdasarkan ID
app.delete('/tasks/:id', (c) => {
  const taskId = Number(c.req.param('id'))
  const targetIndex = taskList.findIndex((task) => task.id === taskId)

  if (targetIndex === -1) {
    return c.json({ error: 'Data tugas tidak ditemukan' }, 404)
  }

  const [removedTask] = taskList.splice(targetIndex, 1)
  return c.json({ message: 'Tugas berhasil dihapus', data: removedTask })
})

export default app
