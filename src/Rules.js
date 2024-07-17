
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLanguage } from './contexts/LanguageContext';

const Rules = () => {

    const { language } = useLanguage();

    const english_title = "RULES AND SAFETY"
    const french_title = "RÈGLES ET SÉCURITÉ"

    const en_desc = "Please read and understand these rules so all players can have fun. If you break our rules, we will kindly ask you to leave the arena."
    const fr_desc = "Veuillez lire et comprendre ces règles afin que tous les joueurs puissent s'amuser. Si vous enfreignez nos règles, nous vous demanderons gentiment de quitter l'arène."
    //rules 
    const en_rule_1 = "1. Always wear protective gear on the arena."
    const fr_rule_1 = "1. Portez toujours un équipement de protection dans l'arène."
    const en_rule_2 = "2. No player may shoot outside of the playing arena."
    const fr_rule_2 = "2. Aucun joueur ne peut tirer en dehors de l’arène de jeu."
    const en_rule_3 = "3. No player may shoot at any employees on the arena."
    const fr_rule_3 = "3. Aucun joueur ne peut tirer sur un employé présent dans l'arène."
    const en_rule_4 = "4. Players must use Parliament Paintball's equipment and paintballs only."
    const fr_rule_4 = "4. Les joueurs doivent utiliser uniquement l'équipement et les balles de paintball de Parliament Paintball."
    const en_rule_5 = "5. If something is wrong with your paintball gun, do not attempt to fix it. Staff will assist you."
    const fr_rule_5 = "5. Si quelque chose ne va pas avec votre pistolet de paintball, n'essayez pas de le réparer. Le personnel vous aidera."
    const en_rule_6 = "6. Do not look down the barrel of your paintball gun."
    const fr_rule_6 = "6. Ne regardez pas le canon de votre pistolet de paintball."
    const en_rule_7 = "7. No physical combat between players is permitted."
    const fr_rule_7 = "7. Aucun combat physique entre joueurs n'est autorisé."
    const en_rule_8 = "8. No use of substances before or during play."
    const fr_rule_8 = "8. Aucune utilisation de substances avant ou pendant le jeu."
    const en_rule_9 = "9. Barrel covers must be used when not on the arena."
    const fr_rule_9 = "9. Les couvre-barils doivent être utilisés lorsqu’ils ne sont pas sur l’arène."
    const en_rule_10 = "10. No firearms or related items are permitted."
    const fr_rule_10 = "10. Aucune arme à feu ou objet connexe n'est autorisé."
    const en_rule_11 = "11. Please remain aware that bruising is common during play."
    const fr_rule_11 = "11. Veuillez rester conscient que les ecchymoses sont courantes pendant le jeu."

    const en_waiv = "A waiver must be red and signed on site before any players are allowed to participate."
    const fr_waiv = "Une renonciation doit être rouge et signée sur place avant que les joueurs ne soient autorisés à participer."

    const title = language === 'english' ? english_title : french_title;
    const desc = language === 'english' ? en_desc: fr_desc;
    const waiv = language === 'english' ? en_waiv: fr_waiv;
    const rule_1 = language === 'english' ? en_rule_1: fr_rule_1;
    const rule_2 = language === 'english' ? en_rule_2: fr_rule_2;
    const rule_3 = language === 'english' ? en_rule_3: fr_rule_3;
    const rule_4 = language === 'english' ? en_rule_4: fr_rule_4;
    const rule_5 = language === 'english' ? en_rule_5: fr_rule_5;
    const rule_6 = language === 'english' ? en_rule_6: fr_rule_6;
    const rule_7 = language === 'english' ? en_rule_7: fr_rule_7;
    const rule_8 = language === 'english' ? en_rule_8: fr_rule_8;
    const rule_9 = language === 'english' ? en_rule_9: fr_rule_9;
    const rule_10 = language === 'english' ? en_rule_10: fr_rule_10;
    const rule_11 = language === 'english' ? en_rule_11: fr_rule_11;

    return (  
        <div className="rules">
            
            <Container fluid className='rules-container'> 
                <Row>
                    <Col> 
                    </Col>
                    <Col className='rules-col'>
                        <h1 className='rule-text'>{title}</h1>
                        <p className='rule-text'>{desc}</p>
                        <p className='rule-text'>{rule_1}</p>
                        <p className='rule-text'>{rule_2}</p>
                        <p className='rule-text'>{rule_3}</p>
                        <p className='rule-text'>{rule_4}</p>
                        <p className='rule-text'>{rule_5}</p>
                        <p className='rule-text'>{rule_6}</p>
                        <p className='rule-text'>{rule_7}</p>
                        <p className='rule-text'>{rule_8}</p>
                        <p className='rule-text'>{rule_9}</p>
                        <p className='rule-text'>{rule_10}</p>
                        <p className='rule-text'>{rule_11}</p>
                        <p><i className='rule-text'>{waiv}</i></p>
                    </Col>
                    <Col> </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Rules;