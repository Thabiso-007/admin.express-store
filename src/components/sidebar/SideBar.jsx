import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
	FaAngleRight,
	FaAngleLeft, 
	FaLaptopCode,
	FaApple,
	FaThLarge, 
	FaShoppingCart, 
	FaSignOutAlt,
	FaBars,
	FaBlog
} from 'react-icons/fa';
import { AiTwotoneCustomerService } from 'react-icons/ai'
import { BiSolidCategory, BiSolidCoupon } from 'react-icons/bi'
import { TfiLayoutListThumbAlt } from 'react-icons/tfi'
import { MdEmail, MdAdminPanelSettings } from 'react-icons/md'

import logo from '../../assets/logo/logo.png';

const ICON_SIZE = 10;

const SideBar = ({ visible, show }) => {
  return (
    <>
		<div className="mobile-nav">
			<button
				className="mobile-nav-btn"
				onClick={() => show(!visible)}
			>
				<FaBars size={24}  />
			</button>
		</div>
		<nav className={!visible ? 'navbar' : ''}>
			<button
				type="button"
				className="nav-btn"
				onClick={() => show(!visible)}
			>
				{ !visible ? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
			</button>
			<div>
				<Link
					className="logo"
					to=""
				>
					<img src={logo} alt="logo" />
				</Link>
				<div className="links nav-top">
					<NavLink to="" activeclassname="active" className="nav-link">
						<FaThLarge size={ICON_SIZE} />
						<span>Dashboard</span>
					</NavLink>
					<NavLink to="customers" className="nav-link">
						<AiTwotoneCustomerService size={ICON_SIZE} />
						<span>Customers</span>
					</NavLink>
					<NavLink to="products" className="nav-link">
						<FaLaptopCode size={ICON_SIZE} />
						<span>Products</span> 
					</NavLink>
					<NavLink to="brand" className="nav-link">
						<FaApple size={ICON_SIZE} />
						<span>Brand</span> 
					</NavLink>
					<NavLink to="categories" className="nav-link">
						<BiSolidCategory size={ICON_SIZE} />
						<span>Categories</span> 
					</NavLink>
					<NavLink to="blogs" className="nav-link">
						<FaBlog size={ICON_SIZE} />
						<span>Blogs</span> 
					</NavLink>
					<NavLink to="orders" className="nav-link">
						<FaShoppingCart size={ICON_SIZE} />
						<span>Orders</span> 
					</NavLink>
					<NavLink to="blog-categories" className="nav-link">
						<TfiLayoutListThumbAlt size={ICON_SIZE} />
						<span>Blog categories</span> 
					</NavLink>
					<NavLink to="enquiries" className="nav-link">
						<MdEmail size={ICON_SIZE} />
						<span>Enquiries</span> 
					</NavLink>
					<NavLink to="coupons" className="nav-link">
						<BiSolidCoupon size={ICON_SIZE} />
						<span>Coupons</span> 
					</NavLink>
				</div>
			</div>
			<div className="links">
				<NavLink to="authorities" className="nav-link">
					<MdAdminPanelSettings size={ICON_SIZE} />
					<span>Authorities</span> 
				</NavLink>
				<button  className="nav-link-btn">
					<FaSignOutAlt size={ICON_SIZE} />
					<span>Logout</span> 
				</button>
			</div>
		</nav>
	</>
  )
}

export default SideBar