import Image from "next/image";
import Link from "next/link";
import FooterItem from "./FooterItem";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href="/">
                <a className="mb-30">
                  <Image src="/icon/logo.svg" width={60} height={60} />
                </a>
              </Link>

              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <FooterItem
                  title="Company"
                  desc1="About Us"
                  desc2="Press Release"
                  desc3="Terms of Use"
                  desc4="Privacy & Policy"
                  href="/"
                />
                <FooterItem
                  title="Support"
                  desc1="Refund Policy"
                  desc2="Unlock Rewards"
                  desc3="Live Chatting"
                  href="/"
                />
                <FooterItem
                  title="Connect"
                  desc1="hi@store.gg"
                  desc2="team@store.gg"
                  desc3="Pasific 12, Jakarta Selatan"
                  desc4="021 - 1122 - 9090"
                  href="tel: 02111229090"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
