import { PiGreaterThanLight } from "react-icons/pi"
import { Link } from "react-router-dom"

const ChelsfieldHistory = () => {
  return (
    <div className="w-full text-black bg-gray-800 pb-10">
      {/* Background section */}
      <div className="bg5 relative"></div>

      {/* Title section */}
      <div className="absolute top-[44%] z-10 left-[20%] text-white w-[60%] mx-auto">
        <h1 className="text-[40px] font-bold uppercase leading-tight text-center">
          Cricket in Chelsefield
        </h1>
      </div>

      {/* Breadcrumb navigation */}
      <div className="flex items-center gap-1 ml-32 py-4 text-white">
        <Link to="/" className="hover:underline">Home</Link>
        <PiGreaterThanLight className="text-sm" />
        <span>Cricket in Chelsfield</span>
      </div>

      <hr className="border-gray-600" />

      {/* Content section */}
      <div className="text-gray-800 rounded-lg w-[90%] md:w-[80%] bg-gray-300 px-8 py-8 mx-auto mt-4">
      <h1 className="text-3xl font-bold text-center mb-6">
      History of Chelsfield Cricket Club
        </h1>
      <section className="mb-6">
        <p className="text-gray-700 leading-relaxed">
          Chelsfield Cricket Club has a rich and storied history dating back to its founding in the mid-16th century. Established in 1731, the club is one of the oldest in the region, deeply rooted in the heart of the Chelsfield community. Over the decades, it has grown from a small village cricket club into a well-respected institution, providing a space for players of all ages and abilities to enjoy the sport.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Early Years and Establishment</h3>
        <p className="text-gray-700 leading-relaxed">
          Chelsfield Cricket Club began as a local village team, with matches played on a basic field near the church. The early years saw enthusiastic participation from local farmers, tradesmen, and villagers, who contributed both time and resources to help the club thrive. The cricket ground was an essential gathering place for the community, where matches were played with a sense of pride and camaraderie.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-3">20th Century Growth</h3>
        <p className="text-gray-700 leading-relaxed">
          In 1924, construction began on what is now known as the Orpington Bypass. At that time, Orpington was still largely undeveloped, and the housing along the stretch from Goddington Park to Crittall’s Corner was all built after 1926. The workers building the road would have found themselves in a largely remote area. During this period, the club was relocated to its current site on Bucks Cross Road. The old pavilion was carefully dismantled and reassembled at the new location. Throughout the early 20th century, the club grew in membership and facilities. By the 1930s, Chelsfield Cricket Club had established itself as a competitive force in local leagues, attracting talented players from neighboring villages and towns. The club weathered difficult periods, including the challenges brought on by both World Wars, when many players were called to service. Despite this, the spirit of cricket at Chelsfield endured, with matches resuming once peace was restored.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          In the post-war years, the club expanded its reach and began to attract more youth and family involvement. Primarily, it was John Bristow—whom Dave Walker fondly referred to as the “godfather of Chelsfield cricket” after the war—who revived the club and got it up and running again. Under his leadership, Chelsfield developed into a strong village side with some exceptional talent. John had a wide network of cricket contacts, and thanks to him, many talented players turned out for the club on Sundays, which was quite rare at the time. They jokingly called themselves the “Chelsfield All Stars” due to the level of talent they attracted. John’s son, Kim, now lives in Somerset and is being contacted to shed some light on CCC history. The growth of cricket programmes during the 1960s and 1970s allowed younger generations to take part in the sport, fostering a culture of inclusion and development that remains a hallmark of the club to this day.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Modern Era and Achievements</h3>
        <p className="text-gray-700 leading-relaxed">
          As the 21st century approached, Chelsfield Cricket Club saw a period of modernization and continued success. The club invested in better facilities, including pavilion renovations and expanded pitch maintenance. Competitive teams continued to perform well in local leagues, achieving notable victories over the years.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Beyond its sporting success, Chelsfield Cricket Club has become a social hub for the local community. The club regularly hosts social events, charity fundraisers, and collaborates with local schools to offer access to its facilities for students without their own playing fields. This community involvement has strengthened its ties with the surrounding areas, helping to preserve its place as a cherished part of Chelsfield life.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Preserving Tradition and Looking Forward</h3>
        <p className="text-gray-700 leading-relaxed">
          Today, Chelsfield Cricket Club is committed to maintaining the values that have sustained it for over 293 years. While the club continues to grow and evolve, with modern equipment, training techniques, and new members, it remains dedicated to the spirit of amateur cricket that has been at its core since the beginning. The compilation of the club’s history, spearheaded by club historian Philippa Rooke, ensures that the stories and achievements of past generations are preserved for the future.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          With a focus on fostering talent, community engagement, and upholding its rich heritage, Chelsfield Cricket Club is poised to remain a cornerstone of cricket in the region for many more years to come.
        </p>
      </section>
      </div>
    </div>
  )
}

export default ChelsfieldHistory