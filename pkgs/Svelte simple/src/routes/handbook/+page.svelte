<script lang="ts">
  import { page } from '$app/state'

  class Params {
    name = $state<string | null>(null)
    date = $state<Date | null>(null)
    phone = $state<string | null>(null)
  }
  const param = new Params()

  $effect(() => {
    ['name', 'date', 'phone'].forEach((variable) => {
      const val = page.url.searchParams.get(variable)
      if(val) {
        switch(variable) {
          case 'name': case 'phone': {
            param[variable] = val
            break
          }
          case 'date': {
            param[variable] = (
              /\d{4}[-/⁄]\d{1,2}[-/⁄]\d{1,2}/.test(val) ? (
                new Date(val)
              ) : (new Date())
            )
            break
          }
          default: {
            console.warn(`Unknown Variable: "${variable}"`)
          }
        }
      }
    })
  })

  $inspect(param)
</script>

<svelte:head>
  <title>IC: Handbook</title>
</svelte:head>

<header>
  <img src="icon.svg"/>
  <h1>The Inventors' Center Handbook</h1>
  <h2><q class="parens">(Revised February 2023)</q></h2>
</header>
<main>
  <section id="toc">
    <h2>Table of Contents</h2>
    <ol>
      <li><a href="#code">Code of Conduct</a></li>
      <li><a href="#policies">Policies and Procedures</a></li>
      <li><a href="#payment">Payment and Billing Terms</a></li>
      <li><a href="#privacy">Privacy Policy</a></li>
      <li><a href="#data">Data Usage</a></li>
      <li><a href="#net">Acceptable Use of Our Network and General Considerations</a></li>
      <li><a href="#wifi">Wireless Network</a></li>
      <li><a href="#trash">Trash and Materials</a></li>
      <li><a href="#tidy">Tidy Space Policy and Moving Other People’s Work</a></li>
      <li><a href="#delivery">Deliveries</a></li>
      <li><a href="#ppe">Personal Protective Equipment</a></li>
      <li><a href="#available-ppe">PPE Available at The Inventors’ Center</a></li>
      <li><a href="#membership">Membership Agreement</a></li>
      <li><a href="#sig">Signature Page</a></li>
    </ol>
  </section>

  <section id="code">
    <h2>Code of Conduct</h2>

    <p>We ask that anyone using our facility in any capacity abide by our code of conduct:</p>

    <p>Welcome to The Inventors’ Center. We are here to learn, share, and make. We want everyone to feel comfortable asking questions, trying new things, and making mistakes. We ask that your conduct is guided by the desire to help us create an inclusive, encouraging, and diverse environment free of intimidation and harassment. We are an eighteen and over facility.</p>

    <p>Comments, actions, or visual displays which demean, harass, or insult others are not permitted.</p>

    <p>This includes those which target a person’s race, creed, ethnicity, age, religion, gender identity, sexual orientation, physical appearance, or ability.</p>

    <p>The Inventors’ Center reserves the right to summarily eject you if you recklessly endanger others, act in violation of the code outlined  above, or otherwise behave poorly.</p>

    <p>If someone is abusive or causes you to feel uncomfortable, speak to a member of staff or email us at <a href="mailto:%22IC%3A%20Abuse%20Reporting%22%20%3Cabuse@inventors.center%3E">abuse@inventors.center</a>.</p>

    <p>This code of conduct is neither exhaustive nor complete. It serves to distill our common understanding of a safe, collaborative space.</p>

    <p>Since this is community space, it is imperative that we work together to communicate and educate others on proper shop etiquette to ensure the safety and pleasure of working in this great space. The IC reserves the right to revoke shop or tool use and require retraining if a particular member is continually damaging tools through  inappropriate use or negligence or leaving messes for others to clean up.</p>
  </section>
  <section id="policies">
    <h2>Policies and Procedures</h2>
    <p>We strive to provide a safe, productive and fun work environment for its members. In light of this mission, we ask you to obey the following policies and procedures for working in our facility.</p>

    <p>Failure to obey these policies and procedures can make our facilities dangerous or unwelcoming to others, and such actions on your part may result in your license being terminated without notice. Please take them seriously. We reserve the right to change these policies and procedures as needed and with sufficient notice to members.</p>

    <p>Individual Safety: Obey all posted signs and literature pertaining to the safe use of our facilities.</p>

    <p>These include but are not limited to signs regarding appropriate shop clothing and protective gear, techniques for safe equipment use, material-specific precautions for equipment, and machine tool lockouts. Do not use equipment you are not comfortable with or trained to use. Our strong preference is that you not operate heavy machinery after staffed hours without a partner in the facility; operate it individually at your own risk. Default to asking for help if uncertain.</p>

    <p>Shared Safety: In a shared and open facility like ours, it is possible for less experienced members to operate equipment dangerously without knowing it. Please stay on the lookout for unsafe behavior, and approach and offer feedback to fellow members if you believe they are working unsafely. Please notify staff immediately if you believe any piece of equipment or infrastructure to be unsafe.</p>

    <p>Respectful Behavior: In both in-person and electronic interactions, behave respectfully, courteously, and professionally to your fellow members. No discrimination, harassment, or hate speech shall be tolerated.</p>

    <p>Courtesy of Open Space: Keep noise levels to a respectful minimum for the comfort and enjoyment of those in the immediate area. No overly loud music, tool use or other noise will be permitted in the open space area without the explicit permission of the members around you. No fumes or flames are permitted in unventilated areas. Restore the open space to be as clean as or cleaner than when you found them. Please respect and do not interrupt any official IC activities or classes in the open space.</p>

    <p>Guests: Non-member guests are permitted in the IC so long as they do not use IC equipment or shared areas or interfere with other members. Guests and their actions are the sole responsibility of the host member. The member is responsible for ensuring the guest signs a liability waiver upon entering the building.</p>

    <p>Tolerance of Feedback: Please be open to constructive feedback from fellow members, especially as it pertains to the safe use of our equipment and disrespectful communication or behavior.</p>
  </section>
  <section id="payment">
    <h2>Payment and Billing Terms</h2>

    <ul>
      <li>Payment for membership and space are due monthly on or before your billing date.</li>
      <li>Incoming payments may be applied to the oldest outstanding invoice if there is an outstanding balance on your account.</li>
      <li>Late fees, in the amount of 5% of the monthly fees due, may be charged 10 days after the billing date and monthly thereafter until the outstanding balance is paid in full.</li>
      <li>All monthly and annual membership are recurring by default.</li>
      <li>By signing up as a member you are committing to a 3 month minimum membership term.</li>
      <li>30 days notice is required to terminate memberships. Cancellations must be submitted via Podia, or by emailing <a href="mailto:%22IC%3A%20Membership%22%20%3Cmembers@inventors.center%3E">members@inventors.center</a>. Verbal or handwritten cancellations are not accepted.</li>
      <li>All membership payments are final. No refunds are available.</li>
      <li>If a membership billing error has occurred, please notify Member Services within 60 days of the said error by emailing <a href="mailto:%22IC%3A%20Membership%22%20%3Cmembers@inventors.center%3E">members@inventors.center</a>. The Inventors’ Center will not refund membership billing errors older than 60 days.</li>
    </ul>
  </section>
  <section id="privacy">
    <h2>Privacy Policy</h2>

    <p>In order to foster a safe and supportive member atmosphere, we ask all members to abide by these privacy policies. Please also see our Privacy Policy for how the IC itself protects members’ personal data.</p>

    <section>
      <h3>Personal Responsibility:</h3>
      <p>We expect our members to protect private and confidential information, especially that which affects the well-being of others. This can include pictures or names of our other members <q class="parens">(some of whom go by names other than their so-called "legal" names)</q>, descriptions of their work, or the contents of their communications. The sections below expand on this philosophy.</p>

      <p>We also expect you abide personally by the same provisions that the IC abides by in general.</p>

      <p>This means that the same sort of data that we take care to protect our members should be protected by you as well.</p>
    </section>
    <section>
      <h3>Photography: Still or Video:</h3>
      <p>Not everyone shares the same attitude towards having their picture online. Please ask in advance before photographing people.</p>

      <p>Additionally, some people may be working on projects that they don't wish to get publicized early.</p>

      <p>Please ask before photographing other members' work or before describing it in public. <q class="parens">(If you have work that you absolutely don't want to be photographed while you're not around, consider covering it. Even with the best of intentions, it might otherwise wind up in the background of some unrelated shot)</q>.</p>

      <p>We request that permission is obtained from people before they are recorded or photographed, and if the pictures/video/audio/etc will be posted anywhere online, permission to do that should also be obtained. Please refrain from taking pictures of in-progress projects; only projects clearly on display can be photographed.</p>
    </section>
  </section>
  <section id="data">
    <h2>Data Usage</h2>

    <p>Members may transmit data on our wireless network or leave it stored on various computers such as classroom machines or CNC machinery. We expect that members do not deliberately eavesdrop on each others' communications. We similarly expect that members will not go to unusual lengths <q class="parens">(such as forensic examination of unused disk areas on shared machines)</q> to recover files deleted by other members. If a member leaves an undeleted file on a shared computer, you may look at it to figure out what it is or who to contact about it, especially if you think it might need to be saved or if it might need to be deleted to free up space, but you do not have rights to copy it for your own use; please ask first.</p>

    <p>Do not swamp our local network. While the occasional large download is fine, routine or continuous high-rate usage can interfere with others' use. Similarly, anything that attracts the attention of law enforcement <q class="parens">(such as downloading copyrighted works)</q> is not allowed. This is both a legal and a privacy issue — if we have problems with these sorts of things, we will be forced to deploy much more privacy-intrusive technologies such as individual authentication for every network connection, and much longer-lived logs of who does what which degrade everyone's privacy and cost us time and effort.</p>

    <p>Private wireless access points in infrastructure mode <q class="parens">(the usual mode)</q> must be cleared with IC before deployment. In general, there should be no reason you'd need to deploy one anyway. In particular, we need to ensure that you aren't capturing data from other users, even by accident, and we need to make sure we can turn off your AP if it is interfering with our network. Access points in client mode such as laptops are of course allowed. If you have a wired-only device, you may use an access point in client-bridge mode to get it on our network; please ask for advice <q class="parens">(for starters, we will need to give your AP a static IP address)</q>, and see also the acceptable use of our public network on the following page.</p>
  </section>
  <section id="net">
    <h2>Acceptable Use of our Network</h2>

    <p class="intro">Why do we have these policies? We need to make sure that we:</p>
    <ul>
      <li>Are legally protected</li>
      <li>Do not have to spend time policing members' behavior</li>
      <li>Can offer a usable network for the convenience of our members</li>
    </ul>

    <p>These guidelines are intended to keep our network functional and us out of legal trouble.</p>

    <p>We ask that you abide by these policies in order to allow us to achieve these goals. If you do not abide by them, your use of the network, and/or of our entire space, may be revoked. You agreed to these policies by signing your membership and/or rental agreement. We reserve the right to alter these policies at any time, and to ask you to change your network behavior if something about it is causing problems for us or any other members, even if it might seem to be strictly permitted. We are trying to make sure that everyone can communicate, and that we don't have to spend a lot of time dealing with it.</p>

    <p>If you have any questions about how to be a good neighbor, or you'd like advice on how to put your particular device on the network, please ask us. We're here to help.</p>

    <section>
      <h3>General Considerations</h3>

      <p>You are expected to honor our privacy policy, which includes not intercepting communications not intended for you, not disrupting others' communications, and so forth.</p>

      <p>This also includes not trying to connect to machines for which you have no authorization. Such attempts, or use of scanning tools to discover such machines, is prohibited. If you'd like to know how the network works, please don't look like you're attacking it — just ask instead.</p>
    </section>
  </section>
  <section id="wifi">
    <h2>Wireless Network</h2>

    <p>The network is run on a best-effort basis. This means that we will make every effort to keep it up at all times <q class="parens">(the IC depends on it for its own operations as well)</q> but we cannot make any guarantees about its  availability. If you have some business need for an absolutely reliable network, you should arrange to pay someone for that service. We are not in that business.</p>

    <section>
      <h3>Bandwidth:</h3>

      <p>You are expected to use reasonable shared-bandwidth behavior. This means not continuously using large amounts of the shared bandwidth. We would like to do this on the honor system and not have to enforce limits. That means:</p>

      <ul>
        <li>No unattended BitTorrent. <q class="parens">(If you'd like to torrent down a Debian release and then turn it off, that's okay, but don't leave it serving after you're done.)</q></li>
        <li>Nothing that could cause the <acronym title="Recording Industry Asociation of America">RIAA</acronym> or <acronym title="Motion Picture Asociation of America">MPAA</acronym> to serve us papers. <q class="parens">(No violation of copyrights: don't torrent a movie.)</q></li>
        <li>
          <p>Nothing that could cause us to have to handle a <acronym title="Digital Millenium Copyright Act">DMCA</acronym> takedown order. <q class="parens">(Again, no violation of copyright: don't set up a warez site.)</q></p>
          <p>As a rule of thumb, expect that our total available bandwidth is equivalent to a medium-quality cable-modem connection <q class="parens">(because it is a cable-modem connection)</q>. But unlike your connection at home, this one is shared by dozens of people and devices.</p>
        </li>
      </ul>
    </section>
  </section>
  <section id="trash">
    <h2>Trash and Materials</h2>

    <section>
      <h3>Trash:</h3>

      <p>In general, be considerate of yourself and your fellow members when using the trash. Here are some pro-tips:</p>

      <ul>
        <li>Do not overfill the trash cans so that they are not too heavy or potentially dangerous. Do not put anything sharp in bagged trash. Wrap sharp things in cardboard and tape.</li>
        <li>Do not overfill bags; keep in mind bagged trash needs to be lifted to shoulder-height into the dumpster.</li>
        <li>Do not put electronic waste in the trash or dumpster. Do not put hazardous waste in the trash or dumpster.</li>
        <li>Do not put paint in the dumpster without using a hardener powder for paint disposal. It's really cheap at Home Depot.</li>
      </ul>
    </section>
    <section>
      <h3>Dumpster Location:</h3>

      <p>The dumpster is located outside of The Inventors’ Center. To get to the dumpster, go out the garage door in the woodshop. We have a large green dumpster, and one rolling trash can.</p>
    </section>
    <section>
      <h3>Bulk Trash:</h3>

      <p>If you have a large object or objects to dispose of, please bring them directly to the city dumpster.</p>
    </section>
    <section>
      <h3>Perishables <q class="parens">(Food)</q>:</h3>

      <p>All food and drink should go in the trash can in the main room which has a lid! Please pour out drinks in the sink before disposing of the cup.</p>
    </section>
    <section>
      <h3>Cardboard:</h3>

      <p>Please break down boxes prior to throwing them into the bin to conserve space. Cardboard is useful also for testing on the laser cutter and for spray painting – usable pieces can be kept above the planer for painting, or cut down into 1x2’ pieces for the laser.</p>
    </section>
    <section>
      <h3>Wood:</h3>

      <p>Please place scrap wood at the bin next to the entrance of the wood shop. Cut it up into small manageable pieces. Exceptionally useful, true, and undamaged scrap of linear wood <q class="parens">(not sheet goods)</q> can be sorted by length in wood storage. All wood will go in the dumpster. Large projects or pieces of wood fall under <q>bulk trash</q>.</p>
    </section>
    <section>
      <h3>Metal:</h3>

      <p>We have a scrap bin that is picked up periodically in the welding shop. Please make sure items are safely in the container.</p>

    </section>
  </section>
  <section id="tidy">
    <h2>Tidy Space Policy</h2>

    <p>With almost an acre of space, everything needs to be taken care of. The overview for the need of this set of guidelines is this: a single member leaves a single item in a shared space, like an aisle or the social area. If only you left a single item out, it would be okay. If our 70+ members and visitors who visit the makerspace each week all left a single thing out, we would be buried in stuff. We have requirements to maintain egress paths from the fire department. We have accessibility requirements from the ADA. We need to maintain a good faith effort of keeping our space clean.</p>

    <h3>Abandoned Property:</h3>

    <ul>
      <li>Things left around that are unlabeled are abandoned property.</li>
      <li>If you are leaving for more than a half hour, make sure you have labeled your project with a Project in Progress note specifying who left it, how long it will be there, and when it is safe to move if needed. Please do not leave projects in general-use space for more than 24 hours.</li>
      <li>Small items may be found at the lost and found area. Large items may be moved to the closet near the wood shop or disposed of.</li>
      <li>Valuables such as jewelry, keys and cell phones may sometimes be kept by in the mechanical closet.</li>
      <li>Things that look like trash will be thrown out <q class="parens">(wood scraps, electronic parts, food, etc)</q>.</li>
    </ul>

    <h3>Moving Other Peoples’ Work:</h3>

    <ul>
      <li>All unattended projects should have a note detailing when you will return to move it, how someone else might move it safely, and special considerations i.e. <q>the paint will be dry by 4 pm Friday.</q>.</li>
      <li>If you come across a project that is in an aisle or other shared space, look around to see whose it is. If no one is around, a note should be present. If no one around knows anything about the project and you need the resource, please be respectful if you need to move it.</li>
      <li>Respecting other people's projects is the right thing to do. Treat them better than you would want your own project treated.</li>
      <li>If you can put the project in a box or container to keep things together, that is best. If you know whose project it is, try to contact them. If not, you could send an email to <a href="mailto:lost@inventors.center">lost@inventors.center</a>.</li>
    </ul>
  </section>
  <section id="delivery">
    <h2>Deliveries</h2>

    <h3>Incoming:</h3>

    <p>You need to either be present or make arrangements with another member to receive the delivery. Leaving things at the load-in bay is not cool. Wood deliveries can be made in the Alley behind the makerspace, metal deliveries can be made in the designated loading zone on the Shelby St. end of the makerspace.</p>
    <ul>
      <li>We <span class="warn"></span> have a loading dock. We cannot accept dock height trucks only Lift-gate trucks.</li>
      <li>Plan deliveries around projects. If you are bringing in 20 sticks of 2 inch tube for a project next week, have a plan to cut it up the day it comes in. Do not expect to use a cart in the aisle for storage for a week.</li>
      <li>If you bring things in, take it of the cart and return the cart once you get to the workshop you are in.</li>
      <li>Take care of your shipping materials, like boxes, pallets, and foam. Pallets should be cut up. Cardboard should be broken down.</li>
      <li>Everything else should be disposed of based on our waste policy.</li>
    </ul>

    <h3>Outgoing:</h3>
    <ul>
      <li>We are not a daily pick-up location for any carrier. Be sure to make appropriate arrangements, especially on deadlines.</li>
    </ul>
  </section>
  <section id="ppe">
    <h2>Personal Protective Equipment</h2>

    <section>
      <h3>Eye Protection:</h3>
      <p>Eye protection protects your eyes from sawdust, splinters, sparks, and other foreign objects.</p>
      <p class="intro">Different types of eye protection include:</p>
      <ul>
        <li>Safety glasses.</li>
        <li>Cover goggles.</li>
        <li>Prescription safety glasses with side shields.</li>
        <li>Face shields.</li>
      </ul>
      <p>Regular prescription glasses without side shields are not an acceptable form of eye protection.</p>
      <p>However, most opticians can get OSHA-grade prescription eyeglasses, so check your local eyeglass store for info.</p>
    </section>
    <section>
      <h3>Foot Protection:</h3>
      <p>Foot injuries can occur when working in shops due to dropped objects, trip hazards, or sparks.</p>
      <ul>
        <li>Close-toed shoes will offer a degree of protection from dropped objects, trip hazards, and sparks.</li>
        <li>Good-quality work boots with steel toes or other protective qualities are the best option for preventing foot injuries.</li>
      </ul>
    </section>
    <section>
      <h3>Hearing Protection:</h3>
      <p>The National Institute on Deafness and Other Communication Disorders <q class="parens">(NIDOCD)</q> warns that long or repeated exposure to sounds at or above 85 decibels can cause hearing loss. Wearing hearing protection helps prevent both short- and long-term hearing damage due to harmful decibel levels, and also prevents debris from entering the ear.</p>
      <ul>
        <li>Disposable foam earplugs are a good choice for blocking sound and, when welding, for keeping sparks from traveling down the ear canal.</li>
        <li>Earmuffs are usually the best choice for hearing protection, as they will keep all foreign objects out of the ear.</li>
        <li>When working in areas with very high noise, both earplugs and earmuffs can be worn to provide better protection.</li>
        <li>Exercise caution and be aware of your surroundings when wearing hearing protection, since it will be harder to hear people talking, auditory alerts on machines, and alarms.</li>
      </ul>
    </section>
    <section>
      <h3>Hand Protection:</h3>
      <p>Gloves can prevent injuries in certain situations while increasing the likelihood of injury in others.</p>
      <ul>
        <li>Gloves must not be worn when using tools such as bandsaws, lathes, drill press, and grinders.</li>
      </ul>
      <p>If a glove gets caught in a tool you can be pulled in and seriously injured or killed.</p>
      <ul>
        <li>Leather work gloves are ideal when handling material to protect from splinters and cuts. They often have nylon backs and should not be used for welding or handling hot metal. MIG welding gloves are made of heavy material to resist sparks and heat.</li>
        <li>Oxy-acetylene fuel gloves are slightly lighter to resist heat while allowing for greater control of the filler wire.</li>
        <li>TIG gloves are the thinnest and allow finer control of the filler material. They are more sensitive to heat.</li>
        <li>Rubber gloves may be needed when working with chemicals. Ensure you use non-latex gloves if you or someone you are working with has a latex allergy.</li>
      </ul>
    </section>
    <section>
      <h3>Respiratory Protection:</h3>
      <p>Airborne contaminants pose a serious risk to health. Particulates less than 10 micrometers, known as PM10, can cause nose and throat irritation.</p>
      <p>Particulates less than 2.5 micrometers, known as PM2.5, can penetrate deep into the lungs and cross into the bloodstream, causing health problems such as asthma, lung cancer, cardiovascular disease, and premature death.</p>
      <p>Wood dust can be as small as .01 micrometers and is recognized by the US National Institutes of Health as a known human carcinogen. Respiratory protection helps prevent the inhalation of harmful particulates, chemicals, and gasses.</p>
      <p>Respiratory protection can range from a disposable N95 face mask to a reusable full face supplied air respirator and should be selected based on the type of material you will be working with. The National Institute for Occupational Safety and Health <q class="parens">(NIOSH)</q> sets standards for respiratory protective equipment and is a good source for information on respiratory protection.</p>
    </section>
  </section>
  <section id="available-ppe">
    <h2>PPE Available at The Inventors’ Center</h2>

    <section>
      <h3>To Borrow:</h3>
      <p>Several types of PPE are available for borrowing when working in the shops. These include:</p>
      <ul>
        <li>Safety glasses</li>
        <li>Earmuffs</li>
        <li>Welding masks</li>
        <li>Welding gloves</li>
        <li>Face shields</li>
        <li>Leather gloves</li>
      </ul>
      <p>These items must be returned to their storage location in the shop when you are done with them.</p>
    </section>
    <section>
      <h3>To Keep:</h3>
      <p>Several consumable safety supplies are available at the safety station near the woodshop.</p>
      <p class="intro">These include:</p>
      <ul>
        <li>Foam earplugs</li>
        <li>Dust masks</li>
        <li>Disposable gloves</li>
      </ul>
      <p>These items can be kept for your use.</p>
    </section>
    <section>
      <h3>PPE You May Need to Provide or Bring:</h3>
      <p>Certain types of PPE are not provided by The Inventors’ Center and may need to be purchased.</p>
      <p class="intro">These include:</p>
      <ul>
        <li>Chemical resistant gloves</li>
        <li>Respirators</li>
        <li>Prescription safety glasses</li>
        <li>N95 dust masks</li>
      </ul>
    </section>
  </section>
  <section id="membership">
    <h2>Membership Agreement</h2>

    <p>
      Model City Makerspace, DBA: The Inventors’ Center <q class="parens">(<q>Company</q> or <q>IC</q>)</q>, a Tennessee nonprofit corporation, and
      {#if name}
        <strong>{name}</strong>
      {:else}
      ____________________ <q class="parens">(name)</q>
      {/if}, the entity or person identified on the signature page of this agreement <q class="parens">(<q>Member</q> or <q>Licensee</q>)</q>, hereby agree that the Company will provide to the Member a license to the shared Inventors’ Center fabrication facilities located at 118 Shelby St. Kingsport, TN. This Agreement is a Membership & License Agreement and is not a lease or any other form of tenancy agreement. The Company and Member agree as follows:
    </p>

    <ol>
      <li>
        <p>
          <strong>Duration of Agreement & Termination.</strong> This Agreement is a Membership and shall commence on
          {#if param.date}
            <strong>{param.date.toLocaleDateString(
              undefined,
              { year: 'numeric', month: 'long', day: 'numeric' },
            )}</strong>
          {:else}
            __________ <q class="parens">(date)</q>
          {/if}, the date identified on the signature page of this agreement.
        </p>
        <p>This Agreement shall automatically renew on a month-to-month basis.</p>
        <p>The Member or IC may terminate this Agreement any time with 30 days advance notice.</p>
        <p>Notwithstanding the foregoing paragraph and notice period, The Inventors’ Center reserves the right to terminate access to and use of Company facilities at any time, immediately and without notice, if the Member fails to comply with any provision of this Agreement and The Inventors’ Center's Policies and Procedures.</p>
        <p>The Inventors’ Center reserves the right to amend the Policies and Procedures and Payment and Billing Terms from time-to-time and at its sole discretion. The Inventors’ Center will notify Member of any changes to said rules and regulations in writing and prior to such rule changes taking effect.</p>
        <p>Upon the termination of this Agreement, Member shall thereafter have no further right to use IC facilities in any manner and Member shall make no further use of IC other than to remove personal items. All advance fees, if any, shall be justly prorated and returned to Member, along with any deposits, within 30 days of the termination of this agreement. Personal items must be removed from The Inventors’ Center within 15 days of the termination of this agreement, after which period they become the property of The Inventors’ Center.</p>
      </li>
      <li>
        <p><strong>Description of Services.</strong> IC agrees to provide Member with secured-entry access to nonexclusive, clean, well-maintained manufacturing equipment and workshop facilities, reasonable electrical power, and wireless internet at The Inventors’ Center, and range of related services as detailed in the attached Payment and Billing Terms. Said attachments and the Member's first invoice details the corresponding service rates.</p>
      </li>
      <li>
        <p><strong>Member Obligations.</strong> A member shall only use the facilities in accordance with IC Policies and Procedures. The shared facilities shall be kept in a neat, clean and attractive condition at all times. A member shall not disturb the use and enjoyment of the Services by any other Member of the Company or the use and enjoyment of the building in which IC is located <q class="parens">(<q>Building</q>)</q> by any occupant of the Building. A member shall not use IC facilities for any inappropriate or unlawful activity including obscenity and use of material protected by intellectual property laws.</p>
        <p>Member will not cause any damage to any part of The Inventors’ Center, including unreasonable or inappropriate wear on equipment or damage to the Building. Should the member cause unreasonable or inappropriate wear on equipment or damage to the Building, they will be held responsible for the cost of returning the equipment or Building to a working state deemed appropriate by Inventors’ Center Staff.</p>
      </li>
      <li>
        <p><strong>Fees.</strong> User agrees to make payments in the amount, form and manner as detailed in the IC Payment and Billing Terms. Failure to make monthly  payments as described will result in the termination of this Agreement and revocation of Member's license to use the facilities. In addition, Member shall pay all reasonable third-party fees <q class="parens">(attorney's fees and debt collection fees specifically included)</q> and other costs incurred by the Company in connection with any late payments or past due amounts.</p>
      </li>
      <li>
        <p><strong>Risk of Use.</strong> Member acknowledges that they are using the facilities of their own free will and decision. Member acknowledges that The Inventors’ Center does not have any liability with respect to Member's access, participation in, use of the facilities, or any loss resulting from such participation or use.</p>
        <p>The Inventors’ Center and its respective board members, employees, volunteers, instructors, agents, contractors, and officers shall not, to the extent permitted by law, be liable for, and the Member waives all right of recovery against The Inventors’ Center and Model City Makerspace and such individuals for any damage or claim with respect to any injury to person or damage to, or loss or destruction of any property of Member, its contractors, employees and invitees due to any act, omission or occurrence in or about IC or the Building.</p>
        <p>Except for gross or willful misconduct by the Company, Member agrees to indemnify, defend, protect and hold the Company and its respective board members, employees, volunteers, instructors, agents, contractors and officers harmless from and against all claims of whatever nature arising out of Member's use of the facilities and occupancy of the Company. Members are strongly encouraged to carry insurance that covers their personal equipment while using the workspace at The Inventors’ Center.</p>
      </li>
      <li>
        <p><strong>Interruption of Service.</strong> Member acknowledges that due to the imperfect nature of electronic communications, electronics, and utilities, The Inventors’ Center shall not be responsible for damages, direct or consequential, which may result in the failure of IC to furnish any of the Services. The Company will, however, act in good faith and in a  commercially reasonable manner in working to remedy any flaws in the facilities or equipment or delays in providing access to the facilities or equipment to the Member.</p>
      </li>
      <li>
        <p><strong>Relationship of the Parties.</strong> Member is not an employee or contractor of the Company. The Inventors’ Center has no right to the work produced by Members or guests working at the Company. Members shall maintain all copyrights, patents and any other proprietary rights related to the Member's works that are created using the facilities.</p>
      </li>
      <li>
        <p><strong>Partial Invalidity.</strong> If any one or more of the provisions of this Agreement shall be invalid or unenforceable, the remainder of this Agreement shall not be affected, and each remaining provision shall be valid and enforceable to the fullest extent permitted by law.</p>
      </li>
      <li>
        <p><strong>Waiver.</strong> No delay or omission on the part of The Inventors’ Center in exercising any right under this Agreement shall operate as a waiver of such right or of any other right of the Company, nor shall any waiver of such right or rights on any one occasion be deemed a bar to, or waiver of, the same right or rights on any future occasion. The acceptance by The Inventors’ Center of any payment, or of a sum less than is due, shall not be construed as a waiver of any of the Company's rights unless such waiver is in writing.</p>
      </li>
      <li>
        <p class="warn">This agreement is not a lease and does not create or reflect any form of tenancy or interest in real property in favor of the member.</p>
        <p>This Agreement is subject and subordinate to a lease by and between The Inventors’ Center and the owner of the Building. This Agreement shall terminate simultaneously with the termination of the said lease. This Agreement shall be governed by, interpreted and enforced in accordance with the laws of the State of Tennessee.</p>
      </li>
    </ol>
  </section>
  <section id="sig">
    <header>
      <img src="icon.svg"/>
      <h2>The Inventors’ Center</h2>
    </header>

    <h2>Code of Conduct, Handbook, and Membership Agreement</h2>
    <p>In consideration for my being permitted to participate in the activities of Model City Makerspace, <acronym title="Doing Business As">DBA</acronym> <q>The Inventors’ Center</q>, I agree to follow all rules, guidelines, and expectations stated in The Inventors’ Center Code of Conduct, Handbook, and Membership Agreement which preceded this form.</p>
    <p>I hereby acknowledge that I have <span class="warn">carefully</span> read all of the provisions in The Inventors’ Center Code of Conduct, Handbook, and Membership Agreement, fully understand the terms and conditions expressed there, and do freely choose acceptance of those rules, guidelines, and expectations.</p>
    <p>Additionally, I agree that should I fail to follow these rules, guidelines, and expectations, my membership and door access may be suspended or revoked as The Inventors’ Center and its representatives including but not limited to the Director, Board of Directors, and staff sees fit, in line with the agreement.</p>
    <p>Finally, I agree to pay membership dues for a minimum of three months from the day I sign up, and from the day I restart my membership should I pause it at any point.</p>

    <form action="#"><ul>
      <li>
        <span>
          Printed Name:
          <input
            name="name"
            value={param.name ?? ''}
          />
        </span>
        <span>
          Date:
          <input
            type="date" name="date"
            value={param.date ? (
              param.date.toISOString().split('T').shift()
            ) : ('')}
          />
        </span>
      </li>
      <li>Signature: _________________________________________</li>
      <li>
        Phone:
        <input
          name="phone" inputmode="numeric"
          value={param.phone ?? ''}
        />
      </li>
    </ul>
      <button class="hidden">Update</button>
    </form>
  </section>
</main>

<style>
  :root {
    --colors: light-dark(#634B96, #F08C3D);
  }
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-block: 15vh;

    & h1 {
      font-family: Allegrand;
      font-size: clamp(21pt, 10vw, 35pt);
    }
    & h1, & h2 {
      text-align: center;
    }
  }
  main {
    font-family: sans-serif;
    max-width: 70ch;
    margin-inline: auto;
    font-size: 14pt;
    text-align: justify;
    text-wrap: pretty;

    & h2 {
      font-size: 24pt;
      text-align: center;
      margin-block: 0rem 0.5rem;
    }
    & h3 {
      margin-block: 1rem 0.5rem;
    }
    :where(h2, h3) {
      color: var(--colors);
    }
  }
  header img {
    max-height: 50vh;
    margin-inline: auto;
  }
  .warn {
    font-weight: bold;
    font-variant: small-caps;
  }
  section {
    margin-block: 6rem;
    break-after: page;

    & section {
      margin-block: 1rem;
      break-after: auto;
    }
  }
  ul, li, p {
    orphans: 3;
    widows: 3;
  }
  ul li::marker {
    content: '► ';
  }
  li::marker {
    color: var(--colors);
  }
  li > p:first-child {
    margin-block-start: 0;
  }
  p {
    text-indent: 1.5em;

    &.first, &:first-of-type {
      text-indent: 0;
    }

    &.intro {
      margin-block-end: 0;

      & + ul {
        margin-block-start: 0;
      }
    }
  }
  #sig header {
    margin-block-end: 1rem;
    & img {
      max-height: 7rem;
    }
    & h2 {
      font-family: Allegrand;
      font-size: 200%;
    }
  }
  #sig h2 {
    font-size: 110%;
  }
  #sig ul {
    margin: 0;
    padding: 0;
    & li {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 3rem;

      & input:not([type='date']), & span:first-of-type {
        flex-grow: 1;
      }
    }
  }
  input {
    border-style: none none solid none;
    background-color: transparent;
    text-align: center;
    font-size: 14pt;
    font-weight: bold;

    &[type='date'] {
      max-width: 30ch;
    }
  }
  .hidden {
    display: none;
  }
  @media print {
    main {
      font-size: 12.5pt;
      margin-block: 0;
    }
    p {
      margin-block: 0 0.25rem;
      padding: 0;
    }
  }
</style>