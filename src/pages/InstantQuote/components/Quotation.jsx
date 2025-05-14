import { useEffect } from "react";

const Quotation = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://seekmake.com/assets/public/iq-api-latest.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="seekmake-quote-container" className="w-full h-full">
      <iframe
        sandbox="allow-downloads allow-scripts allow-same-origin allow-forms allow-popups"
        id="seekmake-embed-iq"
        className="seekmake-embed-iq"
        src="https://seekmake.com/instant-quote/?isEmbed=true&manufacturer=681d9fc6b588fe07cd09b247"
        style={{ width: "100%", height: "100vh", border: "0px" }}
        scrolling="no"
        title="SeekMake Instant Quote"
      ></iframe>
    </section>
  );
};

export default Quotation;
