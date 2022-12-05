
import { useState } from "react";
import Anasayfa from "./Anasayfa";
import './App.css'

function App()
{

    const [baglantiVarmi,baglantiDurumunuDegistir]=useState(window.navigator.onLine);
 
    window.addEventListener("offline", () => {
        console.log("bağlantı gitti");
       baglantiDurumunuDegistir(false);
     
      });
      
      window.addEventListener("online", () => {
        console.log("bağlantı geldi");
        baglantiDurumunuDegistir(true);
      
      });


        return(
        <>
        <p className={baglantiVarmi? "basarili":"uyari"}>{baglantiVarmi ? "bağlantı var " : "Bağlantı yok" }</p>
       {baglantiVarmi && <Anasayfa/>} 

        </>) 



}

export default App;