const photos=[
 {id:'manila-speaking',caption:'Blockchain Impact · Manila, 2026 · Panel discussion',alt:'Alexandre speaking during a panel at Blockchain Impact in Manila.'},
 {id:'manila-panel',caption:'Blockchain Impact · Manila, 2026 · On stage',alt:'Alexandre addressing the audience with fellow panelists in Manila.'},
 {id:'manila-discussion',caption:'Blockchain Impact · Manila, 2026 · Panel discussion',alt:'Alexandre answering a question during the Manila panel.'},
 {id:'manila-group',caption:'Blockchain Impact · Manila, 2026 · With fellow panelists',alt:'Group photograph of the panelists at Blockchain Impact 2026.'},
 {id:'tbw-portrait',caption:'Thailand Blockchain Week · Bangkok, 2026 · On stage',alt:'Portrait of Alexandre speaking into a microphone at Thailand Blockchain Week.'},
 {id:'tbw-panel',caption:'Thailand Blockchain Week · Bangkok, 2026 · Panel discussion',alt:'Alexandre seated with fellow speakers in Bangkok.'},
 {id:'tbw-reception',caption:'Thailand Blockchain Week · Bangkok, 2026 · VIP reception',alt:'Alexandre with guests at the Thailand Blockchain Week VIP reception.'},
 {id:'mybw-2025',caption:'MYBW 2025 · Builders & Bankers: How Crypto Innovation Is Reshaping Finance',alt:'Alexandre speaking on the Builders and Bankers panel at MYBW 2025.'}
];
const dialog=document.getElementById('lightbox');
let current=0;
function showPhoto(index){current=(index+photos.length)%photos.length;const p=photos[current];const image=document.getElementById('expanded-photo');image.src=`assets/${p.id}.webp`;image.alt=p.alt;document.getElementById('photo-caption').textContent=p.caption;document.getElementById('photo-counter').textContent=`${String(current+1).padStart(2,'0')} / ${String(photos.length).padStart(2,'0')}`;}
document.querySelectorAll('[data-photo]').forEach(button=>button.addEventListener('click',()=>{showPhoto(photos.findIndex(p=>p.id===button.dataset.photo));dialog.showModal();document.body.style.overflow='hidden';}));
document.getElementById('close-photo').addEventListener('click',()=>dialog.close());
document.getElementById('previous-photo').addEventListener('click',()=>showPhoto(current-1));
document.getElementById('next-photo').addEventListener('click',()=>showPhoto(current+1));
dialog.addEventListener('close',()=>{document.body.style.overflow='';});
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('keydown',event=>{if(event.key==='ArrowRight'){event.preventDefault();showPhoto(current+1);}if(event.key==='ArrowLeft'){event.preventDefault();showPhoto(current-1);}});
