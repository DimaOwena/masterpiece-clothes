import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'
//we need to pass it state, so class
class DirectoryM extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imgUrl: 'https://cottonon.com/on/demandware.static/-/Library-Sites-cog-megastore-shared-library/default/dwef86c475/group/PLP/SG/05_FY2021_W20849_SEA_M_PLP_D_03.jpg',
                    id: 1
                }, 
                {
                    title: 'jackets',
                    imgUrl: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/7bd3ca2952434bc6b84aad3700e8b844_9366/Essentials_Insulated_Hooded_Jacket_Beige_GT9157_21_model.jpg',
                    id: 2
                },
                {
                    title: 'sneakers',
                    imgUrl: 'https://img.alicdn.com/imgextra/i1/3731892581/TB1vB1KX41YBuNjy1zcXXbNcXXa_!!0-item_pic.jpg_640x640q90.jpg',
                    id: 3
                }
                ,
                {
                    title: 'womens',
                    imgUrl: 'https://media.cafebabel.com/articles/2016/08/10/womens-fashion-clothes-catalogs.jpg',
                    size: 'large',
                    id: 4
                } 
                ,
                {
                    title: 'mens',
                    imgUrl: 'https://cdn.luxe.digital/media/2019/12/16162209/best-men-online-shopping-jcrew-luxe-digital.jpg',
                    size: 'large',
                    id: 5
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ title, imgUrl, id }) => (
                    <MenuItem key={id} title={title} imgUrl={imgUrl}/>
                ))}
            </div>
        )
    }
}

export default DirectoryM;