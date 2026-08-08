document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}));
const places={
 school:{k:"Start here",t:"King's Cross Academy",x:"Our neighbourhood becomes an extension of the classroom. Tap a point on the map to discover real experiences from the KCA curriculum.",tags:["Nursery → Year 6","Learning beyond our gates"]},
 csm:{k:"Whole school · Arts",t:"Central Saint Martins",x:"Arts Week culminates in a gallery exhibition at Central Saint Martins, where children share ambitious work with families and the wider community. Year 3's Ancient Egypt learning also builds towards a Central Saint Martins exhibition.",tags:["Arts Week","Authentic audience","Aspiration","Courage"]},
 coal:{k:"KS2 · Performance",t:"Coal Drops Yard",x:"Key Stage 2 pupils perform Songs Under the Tree beneath the Christmas tree at Coal Drops Yard, sharing music with families, visitors and the King's Cross community.",tags:["Performance","Music","Courage","Kindness"]},
 library:{k:"Year 3 · Geography",t:"British Library",x:"Year 3 take part in Voyage into Maps as they develop mapping skills and explore how journeys help us understand the world and each other.",tags:["Year 3","Maps & mapping","Big Question"]},
 canal:{k:"Year 3 · Geography",t:"London Canal Museum",x:"A canal and water study helps Year 3 investigate their Big Question: How does water bring people together?",tags:["Year 3","Water study","Local learning"]},
 crick:{k:"Science · Partnership",t:"Francis Crick Institute",x:"Practical science experiences connect KCA pupils with world-leading research on the school's doorstep, encouraging curiosity, disciplined enquiry and ambitious thinking.",tags:["Science","STEM","Curiosity","Aspiration"]},
 frank:{k:"Nursery–Year 3 · Inclusion",t:"Frank Barnes School",x:"Sharing our campus with Frank Barnes School for Deaf Children creates a distinctive inclusive community. KCA pupils learn British Sign Language from Nursery to Year 3 and children learn and play alongside one another.",tags:["BSL","Inclusion","Respect","Kindness"]}
};
const pins=document.querySelectorAll('.map-pin');
pins.forEach(btn=>btn.addEventListener('click',()=>{
 pins.forEach(p=>p.classList.remove('active'));btn.classList.add('active');
 const d=places[btn.dataset.place]; if(!d)return;
 document.getElementById('map-kicker').textContent=d.k;
 document.getElementById('map-title').textContent=d.t;
 document.getElementById('map-text').textContent=d.x;
 document.getElementById('map-tags').innerHTML=d.tags.map(t=>`<span>${t}</span>`).join('');
}));
