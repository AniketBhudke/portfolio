import React, {useState} from 'react';

export default function Contact(){
  const [form, setForm] = useState({name:'',email:'',subject:'',message:''});
  const [err, setErr] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!form.name||!form.email||!form.message){ setErr('Please fill required fields'); return; }
    alert('Message sent (demo)');
  }
  return (
    <section id="contact" className="py-24 max-w-[900px] mx-auto px-8">
      <h2 className="text-4xl font-extrabold">Let's Work <span className="text-[#00D9FF]">Together</span></h2>
      <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4">
        {err && <div className="text-red-400">{err}</div>}
        <input className="p-3 rounded bg-[rgba(255,255,255,0.02)] border border-[rgba(0,180,255,0.04)]" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
        <input className="p-3 rounded bg-[rgba(255,255,255,0.02)] border border-[rgba(0,180,255,0.04)]" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
        <input className="p-3 rounded bg-[rgba(255,255,255,0.02)] border border-[rgba(0,180,255,0.04)]" placeholder="Subject" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} />
        <textarea className="p-3 rounded bg-[rgba(255,255,255,0.02)] border border-[rgba(0,180,255,0.04)]" placeholder="Message" rows={6} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
        <button type="submit" className="w-40 h-12 bg-[#00D9FF] rounded text-black font-semibold">Send Message</button>
      </form>
    </section>
  );
}
