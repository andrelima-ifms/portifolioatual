import LinkNav from '../linknav/LinkNav'
import './Footer.css';

export default function Footer() {
  return (
    <div>
      
        <footer className='footer'>
          <div className='DivPrinc'>
            <div className="div1">
             
                <ul className='ul1'>
                <li><LinkNav url='#' texto= 'Inicio'/></li>
              
                </ul>
            </div>

            <div className="div1">
           
                <ul className='ul1'>
                <li><LinkNav url='#' texto= 'Sobre mim'/></li>
                  <li><LinkNav url='#' texto= 'Contato'/></li>
                  <li><LinkNav url='#' texto= 'Blog'/></li>
                </ul>
            </div>

            <div className="div1">
            
                <ul className='ul1'>
                <li><LinkNav url='#' texto= 'FAQ'/></li>
                  <li><LinkNav url='#' texto= 'Telefones'/></li>
                 
                </ul>
            </div>

            <div className="div2">
             
                <ul className='ul2'>
                  <li ><a href="#"><img src="./public/zapzap.png" alt="WhatsApp" /></a></li>
                  <li><a href="#"><img src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-lighting-and-furniture-design-studio-aqua-creations-32.png" alt="Instagram" /></a></li>
                  <li><a href="#"><img src="https://www.pngplay.com/wp-content/uploads/9/Facebook-No-Background.png" alt="Facebook" /></a></li>
                </ul>
            </div>
          </div>
        </footer>
    </div>
  );
}


