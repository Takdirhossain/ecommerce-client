import MenuIcon from '@mui/icons-material/Menu';
import WidgetsIcon from '@mui/icons-material/Widgets';
import "./productshorting.css"
export default function Productshorting() {
  return (
    <div className='productshorrtingwrapper'>
      <h2>All Product</h2>
      <div className='shortingproduct'>
        <input type="range" name="pricerange" id="" className='mr-5'/>
        short by
        <select>
          <option value="Latestproduct">Latest product</option>
          <option value="popularproduct">popular product</option>
          <option value="popularproduct"> Price Low to High</option>
          <option value="popularproduct"> price High to low</option>
        </select>



      </div>
      <div>
        view
        <MenuIcon className='mr-5 ml-5'></MenuIcon>
        <WidgetsIcon></WidgetsIcon>
      </div>
      <hr />
    </div>
  )
}
