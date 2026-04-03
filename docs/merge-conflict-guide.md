# Guía rápida para resolver conflictos de este PR

Si GitHub te muestra opciones **Current / Incoming / Both** en estos archivos, usa esta referencia:

## 1) `features/homepage/sections/hero-section.tsx`
- Conserva la versión final que incluye:
  - wrapper del visual con `className="relative ..."`
  - los 2 blobs decorativos absolutos
  - `aria-hidden="true"` en el bloque decorativo
- Si aparece, normalmente equivale a **Accept both changes** y luego dejar una sola versión limpia.

## 2) `features/homepage/sections/process-section.tsx`
- Mantén **una sola** definición del card (`article`) con clases finales:
  - `p-5 sm:p-6 lg:p-7`
  - `hover:-translate-y-1`
  - `hover:shadow-[0_16px_40px_rgba(17,18,20,0.05)]`
- Si "Accept both" duplica el `article`, no la uses sin limpiar; deja una versión consolidada.

## 3) `app/globals.css`
- Conserva las utilidades de superficie/divider y `::selection` si no hay líneas duplicadas.
- Si hay duplicados por `Accept both`, elimina repeticiones dejando una sola definición por clase.
