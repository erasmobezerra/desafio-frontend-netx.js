import Box from "@/components/Box";
import Pagina from "@/components/Pagina";

export default function Home() {
  return (
    <>
      <Pagina>
        <Box titulo="Alfa">
          <p>Este é um paragrafo</p>
          <p>Este é outro paragrafo</p>
        </Box>
        <Box titulo="Beta">
          <p>Este é um paragrafo</p>
          <p>Este é outro paragrafo</p>
          <button>Detalhar</button>
        </Box>
        <Box titulo="Omega">
          <p>Este é um paragrafo</p>
          <p>Este é outro paragrafo</p>
          <button>Detalhar</button>
          <p>Este é um paragrafo</p>
          <p>Este é outro paragrafo</p>
          <button>Detalhar</button>
        </Box>
      </Pagina>
    </>
  );
}
