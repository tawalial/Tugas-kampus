public class Mobilberaksi {
    public static void main(String[] args) {
        Mobil mbl = new Mobil("Marcedes Benz", "Sport");
        mbl.setBahanBakar("Bensin");
        mbl.setCC(15000.00);

        //dapatkan informasi dari mobil
        System.out.println("Merk : " + mbl.getMerk());
        System.out.println("Jenis : " + mbl.getJenis());
        System.out.println("Bahan Bakar : " + mbl.getBB());
        System.out.println("Cylinder : " + mbl.getCC());
    }
}
