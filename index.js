import './index.css';
import liff from '@line/liff'

document.addEventListener("DOMContentLoaded", function() {
  liff
      .init({
          liffId: 2001511917 - QRxn3Pbl,
          withLoginOnExternalBrowser: true,
      })
    .catch((error) => {
        console.log(error)
    })
});
