export default function Footer() {
    return (
        <div className="container-fluid mt-auto mx-auto borderTop-div">
            <h5 className="text-center mt-4">Siguenos</h5>
            <div className="row justify-content-center my-3">
                <i className="fab fa-facebook-square socialicon"></i>
                <i className="fab fa-instagram socialicon"></i>
                <i className="fab fa-twitter socialicon"></i>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <h5 className="ml-4">Depósito Bancario</h5>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/banelco@2x.png"
                        alt="" className="my-4 img-credit-card"></img>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/pagofacil@2x.png"
                        alt="" class="my-4 img-credit-card"></img>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/rapipago@2x.png"
                        alt="" class="my-4 img-credit-card"></img>
                    <img src="https://www.dexarg.com/images/pago_transferenciabancaria.png"
                        alt="" class="my-4 img-credit-card"></img>
                </div>
                <div className="col-lg-6 text-center">
                    <h5 className="text-center">Tarjetas de Crédito</h5>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png"
                        alt="" className="my-4 img-credit-card"></img>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png"
                        alt="" className="my-4 img-credit-card"></img>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png"
                        alt="" className="my-4 img-credit-card"></img>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png"
                        alt="" className="my-4 img-credit-card"></img>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png"
                        alt="" className="my-4 img-credit-card"></img>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-shopping@2x.png"
                        alt="" className="my-4 img-credit-card"></img>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/nativa@2x.png"
                        alt="" className="my-4 img-credit-card"></img>
                </div>
                <div className="col-lg-3 text-center">
                    <h5 className="text-center">Tarjetas de Dédito</h5>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png"
                        alt="" className="my-4 img-credit-card"></img>
                    <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png"
                        alt="" className="my-4 img-credit-card"></img>
                    <img src="https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0035/4297/Que_bancos_operan_con_Red_Link.jpg?1570968286"
                        alt="" className="my-4 img-credit-card"></img>
                </div>
            </div>
            <div className="row backgrFooter mt-5 justify-content-center align-content-center">
                <p className="mr-3">
                    Copyright © O'Tech 2021 - Todos los derechos reservados.
                </p>
                <a className="mr-3 text-white" href="/">
                    Preguntas Frecuentes
                </a>
                <a className="mr-3 text-white" href="/">
                    Terminos y Condiciones
                </a>
                <a className="mr-3 text-white" href="/">
                    Politicas de Privacidad
                </a>
            </div>
        </div>
    );
}