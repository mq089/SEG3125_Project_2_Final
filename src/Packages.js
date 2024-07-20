import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from './contexts/LanguageContext';

const Packages = () => {
    const { language } = useLanguage();
    
    // translations
    const english_title = "Packages";
    const french_title = "Paquets";
    const en_head = "Equipment Includes:";
    const fr_head = "L'équipement comprend:";
    const en_mask = "Protective Face Mask";
    const fr_mask = "Masque protecteur";
    const en_gun = "Paintball Gun";
    const fr_gun = "Pistolet de paintball";
    const en_cov = "Coverall";
    const fr_cov = "Salopette";
    const english_button = "BOOK NOW!";
    const french_button = "RESERVE MAINTENANT!";
    const en_bronze = "BRONZE PACKAGE";
    const fr_bronze = "PAQUET DE BRONZE";
    const en_silver = "SILVER PACKAGE";
    const fr_silver = "PAQUET D'ARGENT";
    const en_gold = "GOLD PACKAGE";
    const fr_gold = "PAQUET D'OR";
    const en_diamond = "DIAMOND PACKAGE";
    const fr_diamond = "PAQUET DE DIAMANTS";
    const en_equip = "Equipment";
    const fr_equip = "L'équipement";
    const en_pb = "Paintballs";
    const fr_pb = "Balles de paintball";
    const en_arena_1 = "One hour of arena time";
    const fr_arena_1 = "Une heure de temps d'arène";
    const en_arena_2 = "Two hours of arena time";
    const fr_arena_2 = "Deux heures d'arène";
    const en_price_bz = "$40/person";
    const fr_price_bz = "40$/personne";
    const en_price_sil = "$70/person";
    const fr_price_sil = "70$/personne";
    const en_price_gd = "$120/person";
    const fr_price_gd = "120$/personne";
    const en_price_dmnd = "$170/person";
    const fr_price_dmnd = "170$/personne";
    const title = language === 'english' ? english_title : french_title;
    const btn = language === 'english' ? english_button : french_button;
    const head = language === 'english' ? en_head : fr_head;
    const mask = language === 'english' ? en_mask : fr_mask;
    const gun = language === 'english' ? en_gun : fr_gun;
    const cov = language === 'english' ? en_cov : fr_cov;
    const bronze = language === 'english' ? en_bronze : fr_bronze;
    const silver = language === 'english' ? en_silver : fr_silver;
    const gold = language === 'english' ? en_gold : fr_gold;
    const diamond = language === 'english' ? en_diamond : fr_diamond;
    const equip = language === 'english' ? en_equip : fr_equip;
    const pb = language === 'english' ? en_pb : fr_pb;
    const arena_1 = language === 'english' ? en_arena_1 : fr_arena_1;
    const arena_2 = language === 'english' ? en_arena_2 : fr_arena_2;
    const price_br = language === 'english' ? en_price_bz : fr_price_bz;
    const price_sil = language === 'english' ? en_price_sil : fr_price_sil;
    const price_gold = language === 'english' ? en_price_gd : fr_price_gd;
    const price_dmnd = language === 'english' ? en_price_dmnd : fr_price_dmnd;
    
    const [filters, setFilters] = useState({
        price: [],
        hours: [],
        paintballs: []
    });

    const [filteredPackages, setFilteredPackages] = useState([]);

    const packages = [
        {
            type: bronze,
            equipment: equip,
            admission: 'Admission',
            paintballs: `100 ${pb}`,
            hours: arena_1,
            price: price_br,
            priceValue: 40,
            paintballsValue: 100,
            hoursValue: 1
        },
        {
            type: silver,
            equipment: equip,
            admission: 'Admission',
            paintballs: `250 ${pb}`,
            hours: arena_1,
            price: price_sil,
            priceValue: 70,
            paintballsValue: 250,
            hoursValue: 1
        },
        {
            type: gold,
            equipment: equip,
            admission: 'Admission',
            paintballs: `500 ${pb}`,
            hours: arena_2,
            price: price_gold,
            priceValue: 120,
            paintballsValue: 500,
            hoursValue: 2
        },
        {
            type: diamond,
            equipment: equip,
            admission: 'Admission',
            paintballs: `750 ${pb}`,
            hours: arena_2,
            price: price_dmnd,
            priceValue: 170,
            paintballsValue: 750,
            hoursValue: 2
        }
    ];

    useEffect(() => {
        let filtered = packages;

        if (filters.price.length > 0) {
            filtered = filtered.filter(pkg =>
                filters.price.some(range => {
                    if (range === 'under50') return pkg.priceValue < 50;
                    if (range === '50to150') return pkg.priceValue >= 50 && pkg.priceValue <= 150;
                    if (range === 'over150') return pkg.priceValue > 150;
                    return true;
                })
            );
        }
        if (filters.hours.length > 0) {
            filtered = filtered.filter(pkg =>
                filters.hours.includes(pkg.hoursValue.toString())
            );
        }

        if (filters.paintballs.length > 0) {
            filtered = filtered.filter(pkg =>
                filters.paintballs.includes(pkg.paintballsValue.toString())
            );
        }

        setFilteredPackages(filtered);
    }, [filters]);

    const handleFilterChange = (e) => {
        const { name, value, checked } = e.target;
        setFilters(prevFilters => {
            const newFilters = { ...prevFilters };
            if (checked) {
                newFilters[name] = [...newFilters[name], value];
            } else {
                newFilters[name] = newFilters[name].filter(item => item !== value);
            }
            return newFilters;
        });
    };

    const getPackageClass = (type) => {
        switch (type) {
            case bronze:
                return 'bronze-head';
            case silver:
                return 'silver-head';
            case gold:
                return 'gold-head';
            case diamond:
                return 'diamond-head';
            default:
                return '';
        }
    };

    return (
        <div className="home">
            <Container fluid className='top-container'>
                <Row className='info-row'>
                    <Col>
                        <h1 className='info-head'>{title}</h1>
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
                    <Col><Button as={Link} to="book" variant="danger" size='lg'><h1>{btn}</h1></Button>{' '}</Col>
                </Row>
            </Container>

            <Container fluid className='home-container'>
                <Row>
                    <Col>
                        <Container className='faceted-col'> 
                            <h3>Filters</h3>
                            <div>
                                <h4>Price</h4>
                                <label><input type="checkbox" name="price" value="under50" onChange={handleFilterChange} /> Under $50</label><br />
                                <label><input type="checkbox" name="price" value="50to150" onChange={handleFilterChange} /> $50 to $150</label><br />
                                <label><input type="checkbox" name="price" value="over150" onChange={handleFilterChange} /> Over $150</label>
                            </div>
                            <div>
                                <h4>Hours</h4>
                                <label><input type="checkbox" name="hours" value={1} onChange={handleFilterChange} /> 1 Hour</label><br />
                                <label><input type="checkbox" name="hours" value={2} onChange={handleFilterChange} /> 2 Hours</label>
                            </div>
                            <div>
                                <h4>Paintballs</h4>
                                <label><input type="checkbox" name="paintballs" value={100} onChange={handleFilterChange} /> 100</label><br />
                                <label><input type="checkbox" name="paintballs" value={250} onChange={handleFilterChange} /> 250</label><br />
                                <label><input type="checkbox" name="paintballs" value={500} onChange={handleFilterChange} /> 500</label><br />
                                <label><input type="checkbox" name="paintballs" value={750} onChange={handleFilterChange} /> 750</label>
                        </div>
                        </Container>
                    </Col>
                    <Col></Col>
                    <Col xl="10">
                        <Row>
                            {filteredPackages.map((pkg, index) => (
                                <Col key={index} className='packCol'>
                                    <h2 className={getPackageClass(pkg.type)}>{pkg.type}</h2>
                                    <p className='pack-desc'>{pkg.equipment}</p>
                                    <p className='pack-desc'>{pkg.admission}</p>
                                    <p className='pack-desc'>{pkg.paintballs}</p>
                                    <p className='pack-desc'>{pkg.hours}</p>
                                    <p className='pack-desc'>{pkg.price}</p>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Packages;
