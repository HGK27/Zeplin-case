import "./MobileMenuItem.scss";
import Link from "next/link";

export default function MobileMenuItem({ href, label, onClick }) {
  return (
    <li>
      <Link href={href} onClick={onClick} className="mobileMenuLink">
        {label}
      </Link>
    </li>
  );
}
