import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Disclaimer: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // SEO: title, description, canonical
    document.title = "DFSA Professional Client Disclaimer | Leventis AMC";

    const desc =
      "DFSA disclaimer for professional investors in DIFC. Accept to enter Leventis AMC website.";
    let meta = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = desc;

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/disclaimer`;
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("disclaimerAccepted", "true");
    } catch {}
    navigate("/home");
  };

  const handleReject = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            DFSA Professional Client Disclaimer
          </h1>
          <p className="mt-2 text-muted-foreground">
            Please read the following important information before proceeding.
          </p>
        </header>

        <article className="space-y-6 leading-relaxed">
          <p>
            This website is intended for professional investors in the Dubai International Financial
            Centre (DIFC) only.
          </p>
          <p>
            Before proceeding, please review the following important regulatory information. The
            content on this website is issued by Leventis AMC and is intended for the exclusive use
            of persons who are classified as a "Professional Client" or a "Market Counterparty"
            under the Rules of the Dubai Financial Services Authority ("DFSA").
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mt-8">
            Client Classification under DFSA Rules
          </h2>
          <p>
            The DFSA categorizes clients to ensure they receive the appropriate level of
            protection. The classifications below are based on the DFSA's Conduct of Business Module
            (COB).
          </p>

          <h3 className="text-lg md:text-xl font-semibold mt-6">Professional Client</h3>
          <p>
            A Professional Client is a client who is not a Retail Client. A client can be
            classified as a Professional Client in two ways: they are either a "Deemed" Professional
            Client or an "Assessed" Professional Client.
          </p>

          <h4 className="text-base md:text-lg font-semibold mt-4">1. Deemed Professional Client</h4>
          <p>A person is automatically classified as a Deemed Professional Client if they are:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              A national government, one of its agencies, a central bank, or a public authority
              managing public debt.
            </li>
            <li>
              A supranational organization such as the World Bank, the International Monetary Fund
              (IMF), or the European Central Bank.
            </li>
            <li>An Authorised Firm, Authorised Market Institution, or a Regulated Financial Institution.</li>
            <li>A collective investment fund or the management company of such a fund.</li>
            <li>A trustee of a trust that has assets of at least USD 10 million.</li>
            <li>
              A large undertaking that meets two of the following three criteria:
              <ul className="list-[circle] pl-6 mt-1 space-y-1">
                <li>A balance sheet total of at least USD 20 million.</li>
                <li>A net turnover of at least USD 40 million.</li>
                <li>Own funds of at least USD 2 million.</li>
              </ul>
            </li>
            <li>A body corporate whose shares are admitted to trading on a regulated exchange.</li>
            <li>A Single Family Office.</li>
          </ul>

          <h4 className="text-base md:text-lg font-semibold mt-4">2. Assessed Professional Client</h4>
          <p>
            A firm may classify a client as an Assessed Professional Client if the client meets
            specific qualitative and quantitative tests.
          </p>
          <p className="font-medium mt-2">Individuals: An individual can be classified as an Assessed Professional Client if they:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Have net assets of at least USD 1 million, excluding their principal place of
              residence; and
            </li>
            <li>
              The firm has conducted a written assessment and is satisfied that the client has
              sufficient expertise, experience, and knowledge to make their own investment decisions
              and understand the risks involved.
            </li>
          </ul>
          <p className="font-medium mt-2">
            Undertakings: A corporation, partnership, trust, or other undertaking can be classified
            as an Assessed Professional Client if it:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Has Own Funds of at least USD 1 million; and</li>
            <li>
              The firm has conducted the required written assessment of the client's expertise and
              knowledge.
            </li>
          </ul>
          <p className="italic text-muted-foreground">
            Important Note for Assessed Clients: To be treated as an Assessed Professional Client,
            you must request this classification in writing. You will be given a clear written
            warning explaining the protections and rights you may lose. You must confirm in writing
            that you are aware of the consequences of losing such protections.
          </p>

          <h3 className="text-lg md:text-xl font-semibold mt-6">Market Counterparty</h3>
          <p>
            A Market Counterparty is a subset of Professional Clients and represents the highest
            level of client classification, receiving the lowest level of protection. A person is a
            Market Counterparty if they are:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>An Authorised Firm or an Authorised Market Institution.</li>
            <li>A Regulated Financial Institution.</li>
            <li>A central bank.</li>
            <li>A government, government agency, or public authority.</li>
            <li>A supranational organization.</li>
          </ul>

          <h3 className="text-lg md:text-xl font-semibold mt-6">Acceptance of Terms</h3>
          <p>
            By clicking "Accept" and proceeding to the website, you represent and warrant that you
            are a Professional Client or Market Counterparty as defined by the DFSA, and you agree
            to be bound by our terms and conditions. If you do not meet these criteria, you must not
            proceed any further.
          </p>
        </article>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Button size="lg" onClick={handleAccept}>
            Accept & Enter
          </Button>
          <Button size="lg" variant="outline" onClick={handleReject}>
            Reject
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Disclaimer;
