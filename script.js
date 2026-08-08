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
 year2:["Year 2","Culture, history and change come to life","Food tasting, Victorian Day and explorations of how King’s Cross has changed sit alongside wider visits and experiences across London."],
 year3:["Year 3","London, journeys, water and the ancient world","London Exploration Day, Stone Age Day and Ancient Egyptians Day sit alongside purposeful visits across the city, making learning tangible and memorable."],
 year4:["Year 4","Big ideas meet real places and immersive history","Rainforest experiences, exploration of Camden, Ancient Greek Day and Romans Day give pupils contrasting ways to encounter ambitious curriculum knowledge."],
 year5:["Year 5","Learning becomes increasingly immersive","Volcano Day, Anglo-Saxon learning, WonderDome and Tudor Experience Day sit alongside increasingly ambitious performance, music and wider opportunities."],
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
 Connor:["Courage","Connor",`Each morning, Connor Courage arrives at school ready to face a new adventure. With a swish of his tail, he takes a new determined step in his learning.

Challenging work can feel hard and sometimes Connor feels nervous, so he reaches for the painted stone hanging around his neck. It reminds him to ‘Have a Go!’ He rolls up his sleeves, pulls on his sweatband and remembers to ‘Be Brave’.

Even if Connor finds learning difficult, he doesn’t shy away from putting up his hand and proudly using his voice. He takes positive risks by sharing his ideas and speaking in front of others in assembly. Every time he tries something new, he adds a new idea branch to his collection. He understands that courage grows every time we try something challenging.

Connor loves encouraging others to be brave. His shorts are decorated in badges that celebrate when they speak up or join in. He whizzes around our school community on his skates cheering people on. He might wobble now and then but proudly knows he is improving every day.`,"assets/courage.png"],
 Riley:["Respect","Riley",`Thoughtful Riley Respect understands that differences make the KCA community stronger. Her beautiful, unique wings celebrate the experiences that everyone brings.

As she spreads her wings wide, she welcomes everyone with equal affection. Everyone belongs at KCA. She treats every visitor, adult and classmate with respect.

Her most prized possession is her gleaming shell hat; she holds it up to her ear to make sure she listens carefully to other people’s words. She knows that everyone’s opinion matters, even if she disagrees, and values what they say.

The golden feather she carries reminds her to use ‘Kind Words and Kind Acts’. She knows that manners matter and always chooses to say ‘Please’ and ‘Thank You’. Riley also cares for the spaces she shares with others, looking after equipment and tidying up after herself.`,"assets/respect.png"],
 "Kiki & Kofi":["Kindness","Kiki & Kofi",`Kiki and Kofi Kindness arrive at school every day ready to help others feel included, supported and valued. Together, they show that they can make a big difference through small caring actions. They love volunteering and don’t wait to be asked.

With her shiny binoculars, Kiki always notices if someone looks worried, upset or left out and will offer them a helping hand. Warm and loving Kiki wraps them up with compassion and takes care to share.

Empathetic Kofi understands what it feels like to be alone and will always invite others to join in a game. With a flick of his fishing rod, he catches smiles and reaches for positivity in others. His sparkling ladder encourages others to keep stepping up when learning becomes difficult and reminds them not to give up.

Kiki and Kofi are a great team to have in our community. They may look soft and fluffy but Kindness is a powerful value that can turn rain into rainbows.`,"assets/kindness.png"],
 Isaac:["Integrity","Isaac",`You can depend on Isaac Integrity to always do the right thing, even when nobody is watching. His strong shell stops him from being knocked by other people’s opinions so he always speaks up for what he believes is right.

The flashlights on his shell help him to examine everything he sees or hears so he can make a good choice and act fairly. Etched into the markings of his shell is his favourite word, ‘Honesty’. Gleaming grooves flow from it, tracing the KCA Way. He’s Ready, Respectful and Safe in everything he chooses to do.

Although he may not be the fastest or loudest, his words and actions make him someone others can trust. He follows rules carefully, returns lost items and speaks up truthfully during learning or sport.

Isaac knows that integrity means being honest and responsible, even when a task feels difficult or takes longer. He helps others to act with integrity too.`,"assets/integrity.png"],
 Eli:["Endurance","Eli",`Eli Endurance knows that not everything goes perfectly the first time. Making mistakes is just part of the process and Eli resiliently tries again. As he practises and learns new skills, fresh leaves sprout — he’s growing stronger every day.

If learning feels difficult, Eli takes a deep breath, patiently focuses his goggles on the challenge ahead and asks for help when needed. He tops up his fizzing bottle of enthusiasm and sets off with determination.

Eli understands that perseverance helps people grow stronger and more confident. Holding his beacon up high for others to follow, he flies even higher to reach new levels of learning. His tail keeps him on the right course, even if there are bumps in the road. Positivity Power will help everyone shine!`,"assets/endurance.png"],
 Aria:["Aspiration","Aria",`Aria Aspiration has her eyes focused on the horizon. It’s a wonderful world around her and she is ready for the exciting possibilities that come next. Curious and adventurous, she loves exploring; her special star visor helps her look beyond what is right in front of her and spot new adventures in learning.

With her question mark-shaped magnifying glass she studies the world around her with curiosity. Every thoughtful question adds to what she knows.

Look closely at Aria’s wings. Their patterns are formed from the places she has explored, facts she has learnt, music she has played, books she has read and art she has created. Each new experience adds another dimension to her journey.

The more detailed her wings become, the more she learns about herself and the world around her. Aria approaches every opportunity with enthusiasm and determination. She knows that aspiration means believing in yourself, working hard and being brave enough to wonder how high you can fly.`,"assets/aspiration.png"]
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

// V3.8 timetable lightbox
const timetableModal=document.getElementById('timetable-modal');
document.querySelector('.timetable-enlarge')?.addEventListener('click',()=>{
  if(timetableModal) timetableModal.hidden=false;
});
document.querySelector('.timetable-modal-close')?.addEventListener('click',()=>{
  if(timetableModal) timetableModal.hidden=true;
});
timetableModal?.addEventListener('click',e=>{
  if(e.target===timetableModal) timetableModal.hidden=true;
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape' && timetableModal && !timetableModal.hidden) timetableModal.hidden=true;
});
