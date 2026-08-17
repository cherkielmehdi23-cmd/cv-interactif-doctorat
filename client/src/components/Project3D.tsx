/* Style reminder: Research IDE — scène 3D CSS accessible, basée sur les modules documentés du prototype SII-ML CHU. */
import { Box, Eye, Move3D, Rotate3D } from "lucide-react";
import { CSSProperties, useState } from "react";

type Module = { id: string; label: string; detail: string; tone: "teal" | "amber" | "slate" };
const modules: Module[] = [
  { id:"M1", label:"OCR", detail:"Extraction documentaire", tone:"teal" },
  { id:"M2", label:"NLP", detail:"Analyse de texte", tone:"teal" },
  { id:"M3", label:"CLASSIFY", detail:"Classification", tone:"teal" },
  { id:"M4", label:"REVIEW", detail:"Validation humaine", tone:"amber" },
  { id:"M5", label:"GENERATE", detail:"Génération", tone:"slate" },
  { id:"M6", label:"AUDIT", detail:"Journalisation", tone:"slate" },
];

export default function Project3D() {
  const [active, setActive] = useState<Module>(modules[0]);
  const [rotation, setRotation] = useState({ x:-18, y:22 });
  const move = (event: React.PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    setRotation({ x:-18 - y * 12, y:22 + x * 25 });
  };
  const reset = () => setRotation({ x:-18, y:22 });
  const sceneStyle = { "--scene-x":`${rotation.x}deg`, "--scene-y":`${rotation.y}deg` } as CSSProperties;
  return <section className="project-3d" aria-label="Visualisation 3D du prototype SII-ML CHU">
    <header><div><Box size={17} /><span>architecture.3d</span></div><p><Move3D size={14} /> déplacer le pointeur pour explorer</p></header>
    <div className="project-3d-grid">
      <div className="scene-shell" onPointerMove={move} onPointerLeave={reset}>
        <div className="scene" style={sceneStyle}>{modules.map((module, index) => <button key={module.id} className={`node node-${index + 1} ${module.tone} ${active.id === module.id ? "is-active" : ""}`} onClick={() => setActive(module)}><span>{module.id}</span><b>{module.label}</b></button>)}<div className="core"><span>SII</span><b>ML-CHU</b></div><i className="orbit orbit-one" /><i className="orbit orbit-two" /></div>
        <div className="scene-floor" />
      </div>
      <aside className="project-inspector"><span className="inspector-label">ACTIVE MODULE</span><h2><em>{active.id}</em> {active.label}</h2><p>{active.detail}</p><div><span>STATUS</span><b>{active.tone === "amber" ? "CONTROLLED" : "VERIFIED"}</b></div><div><span>FLOW</span><b>DOCUMENT → DECISION → TRACE</b></div><button onClick={reset}><Rotate3D size={15} /> Réinitialiser la vue</button></aside>
    </div>
    <footer><Eye size={14} /><span>Vue conceptuelle de l’architecture fonctionnelle documentée ; elle ne révèle ni données hospitalières ni configurations internes.</span></footer>
  </section>;
}
