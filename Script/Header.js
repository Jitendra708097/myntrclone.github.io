

import Filter from "./filter";
import header from "../CSS/header.css";
export default function Header()
{
    return (
        <div>
             <div className="header">
                <img className="logo" src="https://th.bing.com/th/id/OIP.WP1tB2RD8aV8tYP-a46K1wHaE-?w=270&h=182&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3" height="30px" width="30px"/>
                <button>MEN</button>
                <button>WOMEN</button>
                <button>KIDS</button>
                <button>HOME</button>
                <button>BEUTY</button>
                <button>GENZ</button>
                <button>STUDIO</button>
                 <Filter/>

                <input type="text" placeholder="Search more clothes and brand"/>
                <div>
                <img className="icon" src="https://static.vecteezy.com/system/resources/previews/020/911/736/original/profile-icon-user-icon-person-icon-free-png.png"/>
                <p className="icon-name">Profile</p>
                </div>

                <div>
                <img className="icon" src="https://icon-library.com/images/wishlist-icon/wishlist-icon-0.jpg"/>
                <p className="icon-name">Wishlist</p>
                </div>

                <div>
                <img className="icon" src="https://static.vecteezy.com/system/resources/previews/000/422/881/original/shopping-bag-icon-vector-illustration.jpg"/>
                <p className="icon-name">Bag</p>
                </div>
             </div>
        </div>
    )
}