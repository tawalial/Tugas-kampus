public class Mobil {
    //instansi
    private String merk;
    private String jenis;
    private String bahanbakar;
    private double cc;

    //konstruktor
    public Mobil(String mrk, String jns) {
        merk = mrk;
        jenis = jns;
    }

    public void setMerk(String mrk) {
        merk = mrk;
    }

    public void setJenis(String jns) {
        jenis = jns;
    }

    public void setBahanBakar(String bb) {
        bahanbakar = bb;
    }

    public void setCC(double cyl) {
        cc = cyl;
    }

    public String getMerk() {
        return merk;
    }

    public String getJenis() {
        return jenis;
    }

    public String getBB() {
        return bahanbakar;
    }

    public double getCC() {
        return cc;
    }
}
