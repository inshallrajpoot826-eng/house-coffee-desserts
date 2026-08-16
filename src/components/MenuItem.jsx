import './MenuItem.css'

export default function MenuItem({ item }) {
  return (
    <li className="menu-item">
      <div className="menu-item__text">
        <span className="menu-item__name">{item.name}</span>
        {item.desc && <span className="menu-item__desc">{item.desc}</span>}
      </div>
      <span className="menu-item__leader" aria-hidden="true" />
      {item.price ? (
        <span className="menu-item__price">PKR {item.price.toLocaleString('en-PK')}</span>
      ) : (
        <span className="content-needed">Content needed</span>
      )}
    </li>
  )
}
