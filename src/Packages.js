
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link  } from 'react-router-dom';
import { useLanguage } from './contexts/LanguageContext';

const Packages = () => {
    const { language } = useLanguage();

    //translations
    const english_title = "Packages"
    const french_title = "Paquets"
    const en_head = "Equipment Includes:"
    const fr_head = "L'équipement comprend:"
    const en_mask = "Protective Face Mask"
    const fr_mask = "Masque protecteur"
    const en_gun = "Paintball Gun"
    const fr_gun = "Pistolet de paintball"
    const en_cov = "Coverall"
    const fr_cov = "Salopette"
    const english_button = "BOOK NOW!"
    const french_button = "RESERVE MAINTENANT!"
    const en_bronze = "BRONZE PACKAGE"
    const fr_bronze = "PAQUET DE BRONZE"
    const en_silver = "SILVER PACKAGE"
    const fr_silver = "PAQUET D'ARGENT"
    const en_gold = "GOLD PACKAGE"
    const fr_gold = "PAQUET D'OR"
    const en_diamond = "DIAMOND PACKAGE"
    const fr_diamond = "PAQUET DE DIAMANTS"
    const en_equip = "Equipment"
    const fr_equip ="L'équipement"
    const en_pb = "Paintballs"
    const fr_pb = "Balles de paintball"
    const en_arena_1 = "One hour of arena time"
    const fr_arena_1 = "Une heure de temps d'arène"
    const en_arena_2 = "Two hours of arena time"
    const fr_arena_2 = "Deux heures d'arène"
    const en_price_bz = "$40/person"
    const fr_price_bz = "40$/personne"
    const en_price_sil = "$70/person"
    const fr_price_sil = "70$/personne"
    const en_price_gd = "$120/person"
    const fr_price_gd = "120$/personne"
    const en_price_dmnd = "$170/person"
    const fr_price_dmnd = "170$/personne"
    const title = language === 'english' ? english_title : french_title;
    const btn = language === 'english' ? english_button : french_button;
    const head = language === 'english' ? en_head : fr_head;
    const mask = language === 'english' ?  en_mask: fr_mask;
    const gun = language === 'english' ?  en_gun: fr_gun ;
    const cov = language === 'english' ?  en_cov: fr_cov;
    const bronze = language === 'english' ? en_bronze : fr_bronze;
    const silver = language === 'english' ? en_silver : fr_silver;
    const gold = language === 'english' ?  en_gold : fr_gold;
    const diamond = language === 'english' ?  en_diamond:fr_diamond;
    const equip = language === 'english' ?  en_equip: fr_equip;
    const pb = language === 'english' ?  en_pb:fr_pb ;
    const arena_1 = language === 'english' ?  en_arena_1: fr_arena_1;
    const arena_2 = language === 'english' ? en_arena_2 : fr_arena_2;
    const price_br = language === 'english' ?  en_price_bz: fr_price_bz;
    const price_sil = language === 'english' ?  en_price_sil: fr_price_sil ;
    const price_gold = language === 'english' ?  en_price_gd: fr_price_gd ;
    const price_dmnd = language === 'english' ?  en_price_dmnd: fr_price_dmnd ;

    return (  
        <div className="home">
            
            <Container fluid className='top-container'>
                <Row className='info-row'>
                    <Col> 
                        <h1 className='info-head'>{title} </h1>
                    </Col>
                </Row>

                <Row className='info-row'>
                <Col></Col>
                <Col className='info-col'> 
                    <h2 className='package-head'>{head}</h2>  
                    <p className='equipment'>{mask}</p>
                    <p className='equipment'>{gun}</p>
                    <p className='equipment'>{cov}</p>
                </Col>
                <Col></Col>
                </Row>
                <Row className='info-row'>
                    <Col><Button as={Link} to= "book" variant="danger" size='lg'><h1>{btn}</h1></Button>{' '}</Col>
                </Row>

            </Container>
            
            <Container fluid className='home-container'>
                <Row>
                    <Col className='packCol'>
                        <h2 className='bronze-head'>{bronze}</h2>
                        <p className='pack-desc'>{equip}</p>
                        <p className='pack-desc'>Admission</p>
                        <p className='pack-desc'>100 {pb}</p>
                        <p className='pack-desc'>{arena_1}</p>
                        <p className='pack-desc'>{price_br}</p>
                    </Col>

                    <Col className='packCol'>
                        <h2 className='silver-head'>{silver}</h2>
                        <p className='pack-desc'>{equip}</p>
                        <p className='pack-desc'>Admission</p>
                        <p className='pack-desc'>250 {pb}</p>
                        <p className='pack-desc'>{arena_1}</p>
                        <p className='pack-desc'>{price_sil}</p>
                    </Col>
                    
                    <Col className='packCol'>
                        <h2 className='gold-head'>{gold}</h2>
                        <p className='pack-desc'>{equip}</p>
                        <p className='pack-desc'>Admission</p>
                        <p className='pack-desc'>500 {pb}</p>
                        <p className='pack-desc'>{arena_2}</p>
                        <p className='pack-desc'>{price_gold}</p>
                    </Col>
                  
                    <Col className='packCol'>
                        <h2 className='diamond-head'>{diamond}</h2>
                        <p className='pack-desc'>{equip}</p>
                        <p className='pack-desc'>Admission</p>
                        <p className='pack-desc'>750 {pb}</p>
                        <p className='pack-desc'>{arena_2}</p>
                        <p className='pack-desc'>{price_dmnd}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Packages;