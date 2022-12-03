import {useState} from 'react' //useState ile fonksiyon içinde state yazabiliriz. ve güncellemeler basitçe gerçekleşir.

function C(props)
{
     const [meyve,meyveGuncelle]=useState("elma");
    // state kullanımı yukarıdaki gibidir ve meyveGuncelle bir fonksiyondur(ilki değişken gibi düşün ikincisi fonksiyon(isteğe bağlı))
    // fonksiyonun içindeki değer meyveyi değiştirir fakat fonksiyon sürekli değiştirdiği için sonsuz kod tekrarı olur.
    // bu sebepten onclick in fonksyionun içine yazdık direkt yazsaydık js onu yine çalıştırırdı alt fonksiyon sonsuzluğu engelledi.
    console.log("C1 Çalıştı")

    return <div>Ben C{props.isim[0]} im.Bugünün meyvesi {meyve} 
        <button onClick={()=>{meyveGuncelle("muz")}}>Meyve güncelle</button>
    </div>
}

export default C;