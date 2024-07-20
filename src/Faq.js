
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLanguage } from './contexts/LanguageContext';

const Rules = () => {

    const { language } = useLanguage();

    //translations
    const english_title = "FREQUENTLY ASKED QUESTIONS";
    const french_title = "QUESTIONS FRÉQUEMMENT POSÉES";
    const en_q_1 = "Q: What is paintball?";
    const en_a_1 = "A: Paintball is a sport where players can eliminate other players by hitting them with paintballs fired from a paintball gun."
    const fr_q_1 = "Q: Qu'est-ce que le paintball?"
    const fr_a_1 = "A: Le paintball est un sport dans lequel les joueurs peuvent éliminer d'autres joueurs en les frappant avec des balles de paintball tirées à partir d'un pistolet de paintball."
    const en_q_2 = "Q: Is paintball safe?"
    const en_a_2 = "A: Paintball is a safe and fun sport! We provide the best equipment to ensure you are kept safe from harm. Minor brusing may occur during play."
    const fr_q_2 = "Q: Le paintball est-il sûr?"
    const fr_a_2 = "A: Le paintball est un sport sûr et amusant! Nous fournissons le meilleur équipement pour garantir votre sécurité. Des blessures mineures peuvent survenir pendant le jeu."
    const en_q_3 = "Q: How old do I need to be to play?";
    const en_a_3 = "A: You must be at least 10 years old to play in our arena. If you are under 18 you require an adult to check you in."
    const fr_q_3 = "Q: Quel âge dois-je avoir pour jouer?"
    const fr_a_3 = "Vous devez avoir au moins 10 ans pour jouer dans notre arène. Si vous avez moins de 18 ans, vous aurez besoin d'un adulte pour vous enregistrer."
    const en_q_4 = "Q: Do I need to bring anything to the arena?";
    const en_a_4 = "A: All you need to bring is a piece of ID! Individuals under 18 do not require ID but must be checked in by an adult."
    const fr_q_4 = "Dois-je apporter quelque chose à l'arène "
    const fr_a_4 = "Tout ce que vous devez apporter est une pièce d'identité ! Les personnes de moins de 18 ans n'ont pas besoin de pièce d'identité mais doivent être enregistrées par un adulte."
    const title = language === 'english' ? english_title : french_title;
    const q1 = language === 'english' ? en_q_1 : fr_q_1;
    const a1 = language === 'english' ? en_a_1 : fr_a_1 ;
    const q2 = language === 'english' ? en_q_2 : fr_q_2 ;
    const a2 = language === 'english' ? en_a_2 : fr_a_2;
    const q3 = language === 'english' ? en_q_3 : fr_q_3;
    const a3 = language === 'english' ? en_a_3 : fr_a_3 ;
    const q4 = language === 'english' ?  en_q_4: fr_q_4;
    const a4 = language === 'english' ? en_a_4 :fr_a_4 ; 
    

    return (  
        <div className="rules">
            
            <Container fluid className='rules-container'> 
                <Row>
                    <Col> 
                    </Col>
                    <Col className='rules-col'>
                        <h1 className='rule-text'>{title}</h1>
                        <p className='rule-text'>{q1}</p>
                        <p className='rule-text'>{a1}</p>
                        <p className='rule-text'>{q2}</p>
                        <p className='rule-text'>{a2}</p>
                        <p className='rule-text'>{q3}</p>
                        <p className='rule-text'>{a3}</p>
                        <p className='rule-text'>{q4}</p>
                        <p className='rule-text'>{a4}</p>
                    </Col>
                    <Col> </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Rules;