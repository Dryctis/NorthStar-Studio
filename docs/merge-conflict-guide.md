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

## ¿Se puede arreglar solo desde Vercel?
- **Parcialmente**: puedes reintentar deployment, limpiar cache o redeployar otro commit.
- **Pero la corrección real** debe hacerse en Git: resolver conflictos, hacer commit y push.
- Vercel no edita tu código fuente; solo construye el commit que le envías.

### Checklist rápido para Vercel
1. Verifica el SHA exacto del deployment fallido.
2. Confirma que el SHA más nuevo de la rama incluye el fix.
3. Redeploya ese SHA nuevo.
4. Si persiste, usa `npm run check:conflicts` local y vuelve a push.

## Si Codex muestra: "no permite actualizar las PR..."
Eso significa que la PR fue modificada fuera de Codex y la plataforma bloquea el update automático.

### Qué hacer
1. Crea una **nueva rama** desde `master` actualizado.
2. Aplica/cherry-pick de los commits válidos.
3. Abre una **nueva PR** con esa rama.
4. Cierra la PR anterior para evitar confusión.

Comando útil (ejemplo):
```bash
git checkout master
git pull
git checkout -b fix/redesign-clean
# aplicar commits buenos
# git cherry-pick <sha1> <sha2> ...
git push -u origin fix/redesign-clean
```
