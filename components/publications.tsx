import Image from "next/image";

export default function Publications() {
  return (
    <section className="space-y-12">
      <h2 className="text-2xl font-semibold">Publications</h2>

      {[
        {
          title: "Intelligent Ureteral Stent for Early Detection of Hydronephrosis",
          venue: "Advanced Materials Technologies, 2021",
          link: "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/admt.202100652",
          image: "Paper1.jpg",
        },
        {
          title: "Electromechanically Functionalized Ureteral Stents",
          venue: "ACS Biomaterials Science & Engineering, 2023",
          link: "https://pubs.acs.org/doi/10.1021/acsbiomaterials.3c00114",
          image: "Paper2.jpg",
        },
        {
          title: "Ex-Vivo Testing of Smart Ureteral Stent",
          venue: "Annals of Biomedical Engineering, 2024",
          link: "https://pubmed.ncbi.nlm.nih.gov/39316307/",
          image: "Paper3.jpg",
        },
      ].map((p, i) => (
        <div key={i} className="space-y-4">
          <Image
            src={`/projects/${p.image}`}
            alt={p.title}
            width={1200}
            height={800}
            quality={100}
            className="rounded-xl shadow-lg"
          />
          <h3 className="font-semibold">{p.title}</h3>
          <p className="text-sm text-gray-600">{p.venue}</p>
          <a
            href={p.link}
            target="_blank"
            className="text-sm text-blue-600 underline"
          >
            View publication
          </a>
        </div>
      ))}
    </section>
  );
}
