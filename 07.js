const dataPenjualanPakAldi = [
    {
        namaProduct : 'Sepatu futsal NIKE Vapor Academy 8',
        hargaSatuan : 760000,
        kategori : 'Sepatu sport',
        totalTerjual : 90,
    },
    {
        namaProduct : 'Sepatu Warrior Tristan Black Brown High - Original',
        hargaSatuan : 960000,
        kategori : 'Sepatu Sneaker',
        totalTerjual : 37,
    },
    {
        namaProduct : 'Sepatu Warrior Tristan Maroon High - Original',
        hargaSatuan : 360000,
        kategori : 'Sepatu Sneaker',
        totalTerjual : 90,
    },
    {
        namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original',
        hargaSatuan : 120000,
        kategori : 'Sepatu Sneaker',
        totalTerjual : 90,
    },
]

function hitungTotalPenjualan(dataPenjualanPakAldi) {
    let totalPenjualan =0;
    dataPenjualanPakAldi.map((item) => {
        totalPenjualan +=item.totalTerjual;
    })
    return totalPenjualan
}
console.log(hitungTotalPenjualan(dataPenjualanPakAldi));