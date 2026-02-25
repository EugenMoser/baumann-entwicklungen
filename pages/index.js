import { useEffect, useState } from "react";

import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import Icon from "@mdi/react";

import ProductList from "../components/ProductList";
import { baseUrl, sections } from "../helpers/constants";
import { getAllProductsFromDB } from "../helpers/db-services";
import { findProducts } from "../helpers/services";
import { strings } from "../helpers/strings";

export async function getStaticProps() {
  const products = await getAllProductsFromDB();
  return { props: { staticProducts: products } };
}

function Home({ staticProducts, searchInputText, setSearchInputText }) {
  const allProducts = staticProducts;
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(findProducts(searchInputText, allProducts));
  }, [searchInputText, allProducts]);

  function deleteSessionStorage() {
    if (typeof window !== "undefined") {
      sessionStorage?.removeItem("TILO_scrollPosition");
    }
  }

  function renderContent() {
    if (!allProducts?.length) {
      return <StyledMessage>{strings.errorMsgSiteLoading}</StyledMessage>;
    }

    if (searchInputText?.length) {
      if (filteredProducts.length) {
        return (
          <ProductList
            products={filteredProducts}
            hrefProduct="/products"
            setSearchInputText={setSearchInputText}
          />
        );
      }
      return <StyledMessage>Kein Produkt gefunden.</StyledMessage>;
    }

    return (
      <>
        <StyledH1>{strings.companyWelcome}</StyledH1>
        <StyledParagraph>{strings.companyDescription}</StyledParagraph>
        <StyledH3>{strings.companyOurAreas}</StyledH3>
        <StyledSection>
          {sections.map((section) => (
            <li key={section.category}>
              <StyledLink href={`/products/${section.category}`}>
                <StyledButton onClick={deleteSessionStorage}>
                  <Icon
                    path={section.icon}
                    size={1.5}
                  />
                  {section.name}
                </StyledButton>
              </StyledLink>
            </li>
          ))}
        </StyledSection>
      </>
    );
  }

  return (
    <>
      <HomeHead />
      {renderContent()}
    </>
  );
}

function HomeHead() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tilo Baumann Spritzgussteile e.K.",
    alternateName: "Baumann Entwicklungen",
    url: baseUrl,
    logo: `${baseUrl}/images/baumann_logo_optimiert.png`,
    description: strings.companyDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: strings.street,
      addressLocality: strings.city,
      postalCode: strings.postalCode,
      addressCountry: "DE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: strings.phoneNumber,
      contactType: "customer service",
      availableLanguage: "German",
    },
    email: strings.mailAddress,
    sameAs: [],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Baumann Entwicklungen - Kunststoffspritzgussteile",
    url: baseUrl,
    description: strings.companyDescription,
    publisher: {
      "@type": "Organization",
      name: "Tilo Baumann Spritzgussteile e.K.",
    },
  };

  const categoriesData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Produktbereiche",
    description:
      "Übersicht aller Produktbereiche von Baumann Entwicklungen",
    itemListElement: sections.map((section, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: section.name,
      url: `${baseUrl}/products/${section.category}`,
    })),
  };

  return (
    <Head>
      <title>
        {strings.company} | Kunststoffspritzgussteile für Caravan &
        Möbelindustrie
      </title>
      <meta
        name="description"
        content={strings.companyDescription}
      />
      <meta
        name="keywords"
        content={strings.companyKeywords}
      />
      <link
        rel="canonical"
        href={baseUrl}
      />
      <meta
        name="robots"
        content="index, follow"
      />
      <link
        rel="icon"
        href="/favicon.ico"
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:url"
        content={baseUrl}
      />
      <meta
        property="og:title"
        content={strings.company}
      />
      <meta
        property="og:description"
        content={strings.companyDescription}
      />
      <meta
        property="og:site_name"
        content="Baumann Entwicklungen"
      />
      <meta
        property="og:image"
        content={`${baseUrl}/images/baumann_logo_optimiert.png`}
      />

      {/* Twitter */}
      <meta
        property="twitter:card"
        content="summary_large_image"
      />
      <meta
        property="twitter:url"
        content={baseUrl}
      />
      <meta
        property="twitter:title"
        content={strings.company}
      />
      <meta
        property="twitter:description"
        content={strings.companyDescription}
      />
      <meta
        property="twitter:image"
        content={`${baseUrl}/images/baumann_logo_optimiert.png`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(categoriesData),
        }}
      />
    </Head>
  );
}

export default Home;

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 1rem 0;
`;
const StyledH3 = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 1.75rem;
  margin: 2rem 0 1.25rem;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  a {
    width: 100%;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100px;
      background-color: var(--background-category-color);
      border: none;
      border-radius: 5px;
      font-size: 1.5rem;
      cursor: pointer;
      &:hover,
      &:focus {
        background-color: var(--background-category-hover-color);
      }
    }
  }

  li {
    display: flex;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledParagraph = styled.p`
  line-height: 1.5;
`;

const StyledMessage = styled.p`
  font-size: 1.5rem;
  color: var(--red);
  margin: 3rem 0;
  text-align: center;
`;

const StyledButton = styled.button`
  font-size: 2rem !important;
  gap: 1rem;
`;
