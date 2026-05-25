import Image from "next/image";
import { iconPaths } from "./iconPaths";

type LogoNavbarProps = {
  className?: string;
};

/** Navbar logo — `public/icons/logo_nav2.PNG` 파일 사용 */
export function LogoNavbar({ className }: LogoNavbarProps) {
  return (
    <Image
      src={iconPaths.logo_navbar}
      alt="Casa Politica Intelligence"
      width={842}
      height={296}
      priority
      className={className}
    />
  );
}
