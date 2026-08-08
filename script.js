document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}));
const places={
 school:{k:"Start here",t:"King's Cross Academy",x:"Our neighbourhood becomes an extension of the classroom. Tap a point on the map to discover real experiences from the KCA curriculum.",tags:["Nursery → Year 6","Learning beyond our gates"]},
 csm:{k:"Whole school · Arts",t:"Central Saint Martins",x:"Arts Week culminates in a gallery exhibition at Central Saint Martins, where children share ambitious work with families and the wider community. Year 3's Ancient Egypt learning also builds towards a Central Saint Martins exhibition.",tags:["Arts Week","Authentic audience","Aspiration","Courage"]},
 coal:{k:"KS2 · Performance",t:"Coal Drops Yard",x:"Key Stage 2 pupils perform Songs Under the Tree beneath the Christmas tree at Coal Drops Yard, sharing music with families, visitors and the King's Cross community.",tags:["Performance","Music","Courage","Kindness"]},
 library:{k:"Year 3 · Geography",t:"British Library",x:"Year 3 take part in Voyage into Maps as they develop mapping skills and explore how journeys help us understand the world and each other.",tags:["Year 3","Maps & mapping","Big Question"]},
 canal:{k:"Year 3 · Geography",t:"London Canal Museum",x:"A canal and water study helps Year 3 investigate their Big Question: How does water bring people together?",tags:["Year 3","Water study","Local learning"]},
 crick:{k:"Science · Partnership",t:"Francis Crick Institute",x:"Practical science experiences connect KCA pupils with world-leading research on the school's doorstep, encouraging curiosity, disciplined enquiry and ambitious thinking.",tags:["Science","STEM","Curiosity","Aspiration"]},
 frank:{k:"Nursery–Year 3 · Inclusion",t:"Frank Barnes School",x:"Sharing our campus with Frank Barnes School for Deaf Children creates a distinctive inclusive community. KCA pupils learn British Sign Language from Nursery to Year 3 and children learn and play alongside one another.",tags:["BSL","Inclusion","Respect","Kindness"]}
,
 google:{k:"Whole school · Technology",t:"Google",x:"King's Cross Academy is a Google Reference School. Our relationship with Google reflects the school's commitment to technology-rich learning and developing children's confidence as thoughtful, capable digital learners.",tags:["Google Reference School","Technology-rich learning","Aspiration"]},
 horizon:{k:"Year 3 · London",t:"Horizon 22",x:"Year 3 explore London from above as part of their study of how the city's past has shaped the place they know today.",tags:["Year 3","London","History & geography"]},
 tower:{k:"Year 2 · London",t:"Tower Bridge",x:"A visit to one of London's most recognisable landmarks helps Year 2 connect their study of the city with the real places, structures and stories around them.",tags:["Year 2","London","Local learning"]},
 aquarium:{k:"Year 2 · Science",t:"London Aquarium",x:"Children encounter marine life first-hand, turning science knowledge into a memorable experience of the living world.",tags:["Year 2","Science","Living things"]},
 spitalfields:{k:"Year 2 · Environment",t:"Spitalfields City Farm",x:"Children explore living things, habitats and the relationship between communities and the natural world through a hands-on city-farm experience.",tags:["Year 2","Habitats","Community"]},
 kew:{k:"Years 2 & 4 · Science & Geography",t:"Kew Gardens",x:"Kew Gardens supports learning about plants, environments and the world's rainforests through direct observation, exploration and enquiry.",tags:["Years 2 & 4","Plants","Rainforests"]},
 museum:{k:"Year 3 · History",t:"British Museum",x:"Ancient Egypt is brought to life through the museum's collections before children use their learning in purposeful writing and presentation.",tags:["Year 3","Ancient Egypt","History"]},
 wetlands:{k:"Year 3 · Geography",t:"London Wetland Centre",x:"Children investigate habitats and climate as they consider how people and living things adapt to different environments.",tags:["Year 3","Climate zones","Habitats"]},
 church:{k:"Year 1 · Community",t:"St Pancras Church",x:"A local visit helps children explore community, identity and the places that help shape the neighbourhood around them.",tags:["Year 1","Community","Respect"]},
 heath:{k:"Year 1 · Local environment",t:"Hampstead Heath",x:"Children explore the natural world beyond school, connecting observation and curiosity with their responsibility to care for the world around them.",tags:["Year 1","Nature","Kindness"]},
 gunnersbury:{k:"Year 3 · History",t:"Gunnersbury Park Museum",x:"A museum visit supports children's study of the Stone Age and helps them consider how people survived and thrived in the past.",tags:["Year 3","Stone Age","Endurance"]},
 barbican:{k:"Year 4 · Rainforests",t:"Barbican Conservatory",x:"Children experience a tropical environment in the city while exploring why the world's rainforests matter and why people have a responsibility to protect them.",tags:["Year 4","Rainforests","Integrity"]},
 kentish:{k:"Year 1 · Food & farming",t:"Kentish Town City Farm",x:"Children connect food with farming and ask why it is important to understand where what we eat comes from.",tags:["Year 1","Food","Farming"]},
 thames:{k:"Year 3 · Water",t:"Thames Barrier",x:"The Thames Barrier becomes part of children's investigation into water, rivers and the ways communities respond to the environment around them.",tags:["Year 3","Water","Geography"]}
};
const pins=document.querySelectorAll('.map-pin');
pins.forEach(btn=>btn.addEventListener('click',()=>{
 pins.forEach(p=>p.classList.remove('active'));btn.classList.add('active');
 const d=places[btn.dataset.place]; if(!d)return;
 const kicker=document.getElementById('map-kicker');
 const title=document.getElementById('map-title');
 const text=document.getElementById('map-text');
 const tags=document.getElementById('map-tags');
 if(kicker) kicker.textContent=d.k;
 if(title) title.textContent=d.t;
 if(text) text.textContent=d.x;
 if(tags) tags.innerHTML=d.tags.map(t=>`<span>${t}</span>`).join('');
}));

const yearCopy={
 all:["Across KCA","Experiences that shape a KCA childhood","From local visits to major performances, every phase brings new opportunities to explore, create, perform, lead and belong."],
 nursery:["Nursery","The journey begins with belonging","Our youngest children begin by building relationships, confidence and curiosity — learning alongside the wider KCA and Frank Barnes community."],
 reception:["Reception","Confidence, curiosity and independence","Reception widens children's world through performance, swimming, BSL and a growing sense of themselves as learners."],
 year1:["Year 1","Discovering the world just beyond the school gates","Food, farming, community, nature and the local area become part of children's first Key Stage 1 learning journeys."],
 year2:["Year 2","London becomes a place to investigate","Children encounter landmarks, animals, farms, plants and communities as they make connections between classroom knowledge and the wider city."],
 year3:["Year 3","London, journeys, water and the ancient world","Year 3 is rich with purposeful visits — from Horizon 22 and the British Library to the Canal Museum, Wetland Centre, Thames Barrier and British Museum."],
 year4:["Year 4","Big ideas meet real places","Rainforests, migration, food and the natural world are explored through visits including Kew Gardens, the Barbican Conservatory and Camden."],
 year5:["Year 5","Growing confidence, expertise and independence","By Year 5, pupils combine curriculum knowledge with increasingly ambitious performance, instrumental learning, LAMDA and wider opportunities."],
 year6:["Year 6","Leadership, independence and memories for life","Year 6 brings leadership, performance, immersive history, the Bright Futures Academy and an unforgettable residential to France."],
 whole:["Whole school","Some experiences belong to everyone","KCA-wide opportunities in arts, careers, music, technology, swimming and community ensure enrichment is part of every child's education."]
};
const yearTabs=document.querySelectorAll('.year-tab');
const journeyCards=document.querySelectorAll('.journey-card');
yearTabs.forEach(tab=>tab.addEventListener('click',()=>{
 yearTabs.forEach(t=>{t.classList.remove('active');t.setAttribute('aria-pressed','false')});
 tab.classList.add('active');tab.setAttribute('aria-pressed','true');
 const year=tab.dataset.year;
 journeyCards.forEach(card=>{
   const years=(card.dataset.years||'').split(/\s+/);
   const show=year==='all' || years.includes(year);
   card.classList.toggle('is-hidden',!show);
 });
 const d=yearCopy[year]||yearCopy.all;
 const kicker=document.querySelector('.year-summary-kicker');
 const title=document.getElementById('journey-title');
 const copy=document.getElementById('journey-copy');
 if(kicker) kicker.textContent=d[0];
 if(title) title.textContent=d[1];
 if(copy) copy.textContent=d[2];
}));

const characterStories={
 Connor:["Courage","Connor","Finding and using my voice.","assets/courage.png"],
 Riley:["Respect","Riley","Belonging and understanding others.","assets/respect.png"],
 "Kiki & Kofi":["Kindness","Kiki & Kofi","Caring for others and making a positive difference.","assets/kindness.png"],
 Isaac:["Integrity","Isaac","Making good choices and doing the right thing.","assets/integrity.png"],
 Eli:["Endurance","Eli","Keeping going when things are difficult.","assets/endurance.png"],
 Aria:["Aspiration","Aria","Exploring my future and my passions.","assets/aspiration.png"]
};
document.querySelectorAll('.characters figure').forEach(f=>{
 const name=f.querySelector('figcaption b')?.textContent.trim(), btn=f.querySelector('.meet');
 if(btn) btn.textContent=`Meet ${name} →`;
 btn?.addEventListener('click',()=>{const d=characterStories[name];if(!d)return;
 document.getElementById('modal-value').textContent=d[0];document.getElementById('modal-name').textContent=d[1];
 document.getElementById('modal-story').textContent=d[2];document.getElementById('modal-img').src=d[3];
 document.getElementById('character-modal').hidden=false;});
});
document.querySelector('.modal-close')?.addEventListener('click',()=>document.getElementById('character-modal').hidden=true);
document.getElementById('character-modal')?.addEventListener('click',e=>{if(e.target.id==='character-modal')e.currentTarget.hidden=true});
