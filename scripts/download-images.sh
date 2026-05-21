#!/usr/bin/env bash
# ============================================================
# CIACS — Download e organização das 94 imagens do WordPress
# ============================================================
# Uso:
#   chmod +x scripts/download-images.sh
#   ./scripts/download-images.sh
#   git add assets/images && git commit -m "Add 94 CIACS images" && git push
# Requer: bash, curl, mkdir (padrão em macOS/Linux)
# ============================================================

set -e
BASE="https://mediumblue-trout-778261.hostingersite.com/wp-content/uploads/2026/05/"
OUT="assets/images"

mkdir -p "$OUT/logos" "$OUT/parceiros" "$OUT/galeria" "$OUT/artistas" "$OUT/banners" "$OUT/outros"

echo "Baixando 94 imagens do CIACS..."
COUNT=0
FAIL=0

# 1. CIACS Teatro Cidade de Deus 2017 (a)
if curl -fsSL -o "$OUT/galeria/ciacs-teatro-cidade-deus-2017-a.jpg" "$BASEciacs-teatro-cidade-deus-2017-a.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-teatro-cidade-deus-2017-a.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-teatro-cidade-deus-2017-a.jpg"; fi
# 2. CIACS Teatro Cidade de Deus 2017 (b)
if curl -fsSL -o "$OUT/galeria/ciacs-teatro-cidade-deus-2017-b.jpg" "$BASEciacs-teatro-cidade-deus-2017-b.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-teatro-cidade-deus-2017-b.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-teatro-cidade-deus-2017-b.jpg"; fi
# 3. CIACS Foto Histórica 1993
if curl -fsSL -o "$OUT/galeria/ciacs-foto-1993-1.png" "$BASEciacs-foto-1993-1.png"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-foto-1993-1.png"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-foto-1993-1.png"; fi
# 4. CIACS Foto Histórica 1983 (1)
if curl -fsSL -o "$OUT/galeria/ciacs-foto-1983-1.png" "$BASEciacs-foto-1983-1.png"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-foto-1983-1.png"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-foto-1983-1.png"; fi
# 5. CIACS Foto Histórica 1983 (3)
if curl -fsSL -o "$OUT/galeria/ciacs-foto-1983-3.png" "$BASEciacs-foto-1983-3.png"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-foto-1983-3.png"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-foto-1983-3.png"; fi
# 6. CIACS Foto Histórica 1983 (2)
if curl -fsSL -o "$OUT/galeria/ciacs-foto-1983-2.png" "$BASEciacs-foto-1983-2.png"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-foto-1983-2.png"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-foto-1983-2.png"; fi
# 7. Parceiro Tá na Rua
if curl -fsSL -o "$OUT/parceiros/parceiro-ta-na-rua.jpg" "$BASEparceiro-ta-na-rua.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/parceiros/parceiro-ta-na-rua.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: parceiro-ta-na-rua.jpg"; fi
# 8. Parceiro Palavras Visíveis 2
if curl -fsSL -o "$OUT/parceiros/parceiro-palavras-visiveis-2.jpg" "$BASEparceiro-palavras-visiveis-2.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/parceiros/parceiro-palavras-visiveis-2.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: parceiro-palavras-visiveis-2.jpg"; fi
# 9. Parceiro FENEIS 1
if curl -fsSL -o "$OUT/parceiros/parceiro-feneis-1.jpg" "$BASEparceiro-feneis-1.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/parceiros/parceiro-feneis-1.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: parceiro-feneis-1.jpg"; fi
# 10. Parceiro Tá na Rua (alt)
if curl -fsSL -o "$OUT/parceiros/parceiro-t-na-rua.jpg" "$BASEparceiro-t-na-rua.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/parceiros/parceiro-t-na-rua.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: parceiro-t-na-rua.jpg"; fi
# 11. Parceiro Palavras Visíveis 1
if curl -fsSL -o "$OUT/parceiros/parceiro-palavras-visiveis-1.jpg" "$BASEparceiro-palavras-visiveis-1.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/parceiros/parceiro-palavras-visiveis-1.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: parceiro-palavras-visiveis-1.jpg"; fi
# 12. Parceiro Palavras Visíveis
if curl -fsSL -o "$OUT/parceiros/parceiro-palavras-visiveis.jpg" "$BASEparceiro-palavras-visiveis.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/parceiros/parceiro-palavras-visiveis.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: parceiro-palavras-visiveis.jpg"; fi
# 13. Parceiro FENEIS
if curl -fsSL -o "$OUT/parceiros/parceiro-feneis.jpg" "$BASEparceiro-feneis.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/parceiros/parceiro-feneis.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: parceiro-feneis.jpg"; fi
# 14. CIACS Foto 1993
if curl -fsSL -o "$OUT/galeria/ciacs-foto-1993.png" "$BASEciacs-foto-1993.png"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-foto-1993.png"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-foto-1993.png"; fi
# 15. CIACS Reims Cidade de Deus
if curl -fsSL -o "$OUT/galeria/ciacs-reims-cidade-de-deus.jpg" "$BASEciacs-reims-cidade-de-deus.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-reims-cidade-de-deus.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-reims-cidade-de-deus.jpg"; fi
# 16. Cidade de Deus Casos e Conflitos
if curl -fsSL -o "$OUT/galeria/ciacs-cidade-de-deus-casos-e-conflitos.jpg" "$BASEciacs-cidade-de-deus-casos-e-conflitos.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-cidade-de-deus-casos-e-conflitos.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-cidade-de-deus-casos-e-conflitos.jpg"; fi
# 17. Teatro Brasileiro dos Surdos
if curl -fsSL -o "$OUT/galeria/ciacs-teatro-barasileiro-dos-surdos.jpg" "$BASEciacs-teatro-barasileiro-dos-surdos.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-teatro-barasileiro-dos-surdos.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-teatro-barasileiro-dos-surdos.jpg"; fi
# 18. Companhia Surda de Teatro
if curl -fsSL -o "$OUT/galeria/ciacs-companha-surda-de-teatro.jpg" "$BASEciacs-companha-surda-de-teatro.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-companha-surda-de-teatro.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-companha-surda-de-teatro.jpg"; fi
# 19. I Encontro Estadual
if curl -fsSL -o "$OUT/banners/I_ENCONTRO_ESTADUAL_DE_ARTE_E_CULTURA_SURDA_PROPAGANDA3.jpg" "$BASEI_ENCONTRO_ESTADUAL_DE_ARTE_E_CULTURA_SURDA_PROPAGANDA3.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/banners/I_ENCONTRO_ESTADUAL_DE_ARTE_E_CULTURA_SURDA_PROPAGANDA3.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: I_ENCONTRO_ESTADUAL_DE_ARTE_E_CULTURA_SURDA_PROPAGANDA3.jpg"; fi
# 20. Cartaz 27 Setembro
if curl -fsSL -o "$OUT/banners/cartaz_27_setembro_2.jpg" "$BASEcartaz_27_setembro_2.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/banners/cartaz_27_setembro_2.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: cartaz_27_setembro_2.jpg"; fi
# 21. Chá Julino
if curl -fsSL -o "$OUT/banners/cha_julino.jpg" "$BASEcha_julino.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/banners/cha_julino.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: cha_julino.jpg"; fi
# 22. Cartaz Setembro Azul 2016
if curl -fsSL -o "$OUT/banners/cartaz-2016.SETEMBRO_AZULjpeg.jpeg" "$BASEcartaz-2016.SETEMBRO_AZULjpeg.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/banners/cartaz-2016.SETEMBRO_AZULjpeg.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: cartaz-2016.SETEMBRO_AZULjpeg.jpeg"; fi
# 23. Webnode Companhia Surda
if curl -fsSL -o "$OUT/galeria/ciacs-webnode-companhia-surda-teatro.jpg" "$BASEciacs-webnode-companhia-surda-teatro.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-webnode-companhia-surda-teatro.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-webnode-companhia-surda-teatro.jpg"; fi
# 24. Logotipo Atual CIACS
if curl -fsSL -o "$OUT/logos/ciacs-webnode-logotipo-atual.png" "$BASEciacs-webnode-logotipo-atual.png"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/logos/ciacs-webnode-logotipo-atual.png"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-webnode-logotipo-atual.png"; fi
# 25. Logotipo Antigo CIACS
if curl -fsSL -o "$OUT/logos/ciacs-webnode-logotipo-antigo.png" "$BASEciacs-webnode-logotipo-antigo.png"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/logos/ciacs-webnode-logotipo-antigo.png"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-webnode-logotipo-antigo.png"; fi
# 26. Home Banner Webnode
if curl -fsSL -o "$OUT/banners/ciacs-webnode-home-banner.png" "$BASEciacs-webnode-home-banner.png"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/banners/ciacs-webnode-home-banner.png"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-webnode-home-banner.png"; fi
# 27. Webnode 1983 (1)
if curl -fsSL -o "$OUT/galeria/ciacs-webnode-foto-1983-1.png" "$BASEciacs-webnode-foto-1983-1.png"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-webnode-foto-1983-1.png"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-webnode-foto-1983-1.png"; fi
# 28. Webnode 1983 (3)
if curl -fsSL -o "$OUT/galeria/ciacs-webnode-foto-1983-3.png" "$BASEciacs-webnode-foto-1983-3.png"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-webnode-foto-1983-3.png"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-webnode-foto-1983-3.png"; fi
# 29. Webnode 1983 (2)
if curl -fsSL -o "$OUT/galeria/ciacs-webnode-foto-1983-2.png" "$BASEciacs-webnode-foto-1983-2.png"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-webnode-foto-1983-2.png"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-webnode-foto-1983-2.png"; fi
# 30. INES Divulga Artistas - capa
if curl -fsSL -o "$OUT/galeria/ciacs-ines-divulga-artistas-surdos-e-espac3a7o-43a-capa-completa.jpg" "$BASEciacs-ines-divulga-artistas-surdos-e-espac3a7o-43a-capa-completa.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-ines-divulga-artistas-surdos-e-espac3a7o-43a-capa-completa.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-ines-divulga-artistas-surdos-e-espac3a7o-43a-capa-completa.jpg"; fi
# 31. Integrando as Artes Logo
if curl -fsSL -o "$OUT/logos/ciacs-integrando-as-artes-e-culturas-logo.jpg" "$BASEciacs-integrando-as-artes-e-culturas-logo.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/logos/ciacs-integrando-as-artes-e-culturas-logo.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-integrando-as-artes-e-culturas-logo.jpg"; fi
# 32. INES Divulga Artistas
if curl -fsSL -o "$OUT/galeria/ciacs-ines-divulga-artistas-surdos-e-sem-tc3adtulo-1.jpg" "$BASEciacs-ines-divulga-artistas-surdos-e-sem-tc3adtulo-1.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-ines-divulga-artistas-surdos-e-sem-tc3adtulo-1.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-ines-divulga-artistas-surdos-e-sem-tc3adtulo-1.jpg"; fi
# 33. Sencity UFRJ (imageproxy)
if curl -fsSL -o "$OUT/galeria/ciacs-sencity-ufrj-a-festa-chega-ao-imageproxy.png" "$BASEciacs-sencity-ufrj-a-festa-chega-ao-imageproxy.png"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-sencity-ufrj-a-festa-chega-ao-imageproxy.png"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-sencity-ufrj-a-festa-chega-ao-imageproxy.png"; fi
# 34. Sencity UFRJ
if curl -fsSL -o "$OUT/galeria/ciacs-sencity-ufrj-a-festa-chega-ao-enac3.png" "$BASEciacs-sencity-ufrj-a-festa-chega-ao-enac3.png"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-sencity-ufrj-a-festa-chega-ao-enac3.png"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-sencity-ufrj-a-festa-chega-ao-enac3.png"; fi
# 35. Setembro Azul 2016 - realização
if curl -fsSL -o "$OUT/banners/ciacs-ciacs-setembro-azul-2016-realizac3a7c3a3o.png" "$BASEciacs-ciacs-setembro-azul-2016-realizac3a7c3a3o.png"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/banners/ciacs-ciacs-setembro-azul-2016-realizac3a7c3a3o.png"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-ciacs-setembro-azul-2016-realizac3a7c3a3o.png"; fi
# 36. 28 anos CIACS
if curl -fsSL -o "$OUT/galeria/ciacs-socios-comemoram-os-28-anos-do-2017-almoc3a7o-de-aniversc3a1rio-de-28-anos-de-ciacs.png" "$BASEciacs-socios-comemoram-os-28-anos-do-2017-almoc3a7o-de-aniversc3a1rio-de-28-anos-de-ciacs.png"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-socios-comemoram-os-28-anos-do-2017-almoc3a7o-de-aniversc3a1rio-de-28-anos-de-ciacs.png"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-socios-comemoram-os-28-anos-do-2017-almoc3a7o-de-aniversc3a1rio-de-28-anos-de-ciacs.png"; fi
# 37. Setembro Azul 2016 - programação
if curl -fsSL -o "$OUT/banners/ciacs-ciacs-setembro-azul-2016-ciacs-e-mar-programac3a7c3a3o-2016.png" "$BASEciacs-ciacs-setembro-azul-2016-ciacs-e-mar-programac3a7c3a3o-2016.png"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/banners/ciacs-ciacs-setembro-azul-2016-ciacs-e-mar-programac3a7c3a3o-2016.png"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-ciacs-setembro-azul-2016-ciacs-e-mar-programac3a7c3a3o-2016.png"; fi
# 38. Cidade de Deus - sócios França
if curl -fsSL -o "$OUT/galeria/ciacs-cidade-de-deus-casos-e-conflit-20233015_1425218010899701_7578049656142316793_o.jpg" "$BASEciacs-cidade-de-deus-casos-e-conflit-20233015_1425218010899701_7578049656142316793_o.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-cidade-de-deus-casos-e-conflit-20233015_1425218010899701_7578049656142316793_o.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-cidade-de-deus-casos-e-conflit-20233015_1425218010899701_7578049656142316793_o.jpg"; fi
# 39. Diretoria 2018 (1)
if curl -fsSL -o "$OUT/artistas/ciacs-eleita-a-nova-diretoria-do-cia-whatsapp-image-2018-01-18-at-15-22-50.jpeg" "$BASEciacs-eleita-a-nova-diretoria-do-cia-whatsapp-image-2018-01-18-at-15-22-50.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/artistas/ciacs-eleita-a-nova-diretoria-do-cia-whatsapp-image-2018-01-18-at-15-22-50.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-eleita-a-nova-diretoria-do-cia-whatsapp-image-2018-01-18-at-15-22-50.jpeg"; fi
# 40. Diretoria 2018-20
if curl -fsSL -o "$OUT/artistas/ciacs-eleita-a-nova-diretoria-do-cia-diretoria-2018-20.jpg" "$BASEciacs-eleita-a-nova-diretoria-do-cia-diretoria-2018-20.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/artistas/ciacs-eleita-a-nova-diretoria-do-cia-diretoria-2018-20.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-eleita-a-nova-diretoria-do-cia-diretoria-2018-20.jpg"; fi
# 41. Diretoria 2018 (2)
if curl -fsSL -o "$OUT/artistas/ciacs-eleita-a-nova-diretoria-do-cia-whatsapp-image-2018-01-18-at-15-14-15.jpeg" "$BASEciacs-eleita-a-nova-diretoria-do-cia-whatsapp-image-2018-01-18-at-15-14-15.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/artistas/ciacs-eleita-a-nova-diretoria-do-cia-whatsapp-image-2018-01-18-at-15-14-15.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-eleita-a-nova-diretoria-do-cia-whatsapp-image-2018-01-18-at-15-14-15.jpeg"; fi
# 42. Diretoria 2018 (3)
if curl -fsSL -o "$OUT/artistas/ciacs-eleita-a-nova-diretoria-do-cia-whatsapp-image-2018-01-18-at-15-14-15-1.jpeg" "$BASEciacs-eleita-a-nova-diretoria-do-cia-whatsapp-image-2018-01-18-at-15-14-15-1.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/artistas/ciacs-eleita-a-nova-diretoria-do-cia-whatsapp-image-2018-01-18-at-15-14-15-1.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-eleita-a-nova-diretoria-do-cia-whatsapp-image-2018-01-18-at-15-14-15-1.jpeg"; fi
# 43. Diretoria 2018 (4)
if curl -fsSL -o "$OUT/artistas/ciacs-eleita-a-nova-diretoria-do-cia-whatsapp-image-2018-01-18-at-15-22-36.jpeg" "$BASEciacs-eleita-a-nova-diretoria-do-cia-whatsapp-image-2018-01-18-at-15-22-36.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/artistas/ciacs-eleita-a-nova-diretoria-do-cia-whatsapp-image-2018-01-18-at-15-22-36.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-eleita-a-nova-diretoria-do-cia-whatsapp-image-2018-01-18-at-15-22-36.jpeg"; fi
# 44. Jantar 29 anos (1)
if curl -fsSL -o "$OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-30.jpeg" "$BASEciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-30.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-30.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-30.jpeg"; fi
# 45. Jantar 29 anos (2)
if curl -fsSL -o "$OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-35-1.jpeg" "$BASEciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-35-1.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-35-1.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-35-1.jpeg"; fi
# 46. Jantar 29 anos (3)
if curl -fsSL -o "$OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-29-1.jpeg" "$BASEciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-29-1.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-29-1.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-29-1.jpeg"; fi
# 47. Jantar 29 anos (4)
if curl -fsSL -o "$OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-35.jpeg" "$BASEciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-35.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-35.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-35.jpeg"; fi
# 48. Jantar 29 anos (5)
if curl -fsSL -o "$OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-40-1.jpeg" "$BASEciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-40-1.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-40-1.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-40-1.jpeg"; fi
# 49. Jantar 29 anos (6)
if curl -fsSL -o "$OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-30-1.jpeg" "$BASEciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-30-1.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-30-1.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-30-1.jpeg"; fi
# 50. Jantar 29 anos (7)
if curl -fsSL -o "$OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-28.jpeg" "$BASEciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-28.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-28.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-28.jpeg"; fi
# 51. Jantar 29 anos (8)
if curl -fsSL -o "$OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-33.jpeg" "$BASEciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-33.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-33.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-33.jpeg"; fi
# 52. Jantar 29 anos (9)
if curl -fsSL -o "$OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-37.jpeg" "$BASEciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-37.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-37.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-37.jpeg"; fi
# 53. Jantar 29 anos (10)
if curl -fsSL -o "$OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-36.jpeg" "$BASEciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-36.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-36.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-36.jpeg"; fi
# 54. Jantar 29 anos (11)
if curl -fsSL -o "$OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-33-1.jpeg" "$BASEciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-33-1.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-33-1.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-33-1.jpeg"; fi
# 55. Jantar 29 anos (12)
if curl -fsSL -o "$OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-36-1.jpeg" "$BASEciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-36-1.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-36-1.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-36-1.jpeg"; fi
# 56. Jantar 29 anos (13)
if curl -fsSL -o "$OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-32.jpeg" "$BASEciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-32.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-32.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-32.jpeg"; fi
# 57. Jantar 29 anos (14)
if curl -fsSL -o "$OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-34.jpeg" "$BASEciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-34.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-34.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-34.jpeg"; fi
# 58. Jantar 29 anos (15)
if curl -fsSL -o "$OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-37-1.jpeg" "$BASEciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-37-1.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-37-1.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-37-1.jpeg"; fi
# 59. Jantar 29 anos (16)
if curl -fsSL -o "$OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-39.jpeg" "$BASEciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-39.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-39.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-39.jpeg"; fi
# 60. Jantar 29 anos (17)
if curl -fsSL -o "$OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-28-1.jpeg" "$BASEciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-28-1.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-28-1.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-28-1.jpeg"; fi
# 61. Jantar 29 anos (18)
if curl -fsSL -o "$OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-34-1.jpeg" "$BASEciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-34-1.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-34-1.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-34-1.jpeg"; fi
# 62. Jantar 29 anos (19)
if curl -fsSL -o "$OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-31.jpeg" "$BASEciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-31.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-31.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-31.jpeg"; fi
# 63. Jantar 29 anos (20)
if curl -fsSL -o "$OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-29.jpeg" "$BASEciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-29.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-29.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-29.jpeg"; fi
# 64. Jantar 29 anos (21)
if curl -fsSL -o "$OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-27-1.jpeg" "$BASEciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-27-1.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-27-1.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-27-1.jpeg"; fi
# 65. Jantar 29 anos (22)
if curl -fsSL -o "$OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-38-1.jpeg" "$BASEciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-38-1.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-38-1.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-veja-como-foi-o-jantar-de-come-whatsapp-image-2018-02-06-at-14-34-38-1.jpeg"; fi
# 66. Diretoria CIACS (3)
if curl -fsSL -o "$OUT/artistas/ciacs-diretoria-ciacs-site-3.jpg" "$BASEciacs-diretoria-ciacs-site-3.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/artistas/ciacs-diretoria-ciacs-site-3.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-diretoria-ciacs-site-3.jpg"; fi
# 67. Diretoria CIACS Blog (1)
if curl -fsSL -o "$OUT/artistas/ciacs-diretoria-ciacs-blog-1.jpeg" "$BASEciacs-diretoria-ciacs-blog-1.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/artistas/ciacs-diretoria-ciacs-blog-1.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-diretoria-ciacs-blog-1.jpeg"; fi
# 68. Diretoria CIACS (5)
if curl -fsSL -o "$OUT/artistas/ciacs-diretoria-ciacs-site-5.jpg" "$BASEciacs-diretoria-ciacs-site-5.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/artistas/ciacs-diretoria-ciacs-site-5.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-diretoria-ciacs-site-5.jpg"; fi
# 69. Diretoria CIACS (6)
if curl -fsSL -o "$OUT/artistas/ciacs-diretoria-ciacs-site-6.jpg" "$BASEciacs-diretoria-ciacs-site-6.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/artistas/ciacs-diretoria-ciacs-site-6.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-diretoria-ciacs-site-6.jpg"; fi
# 70. Diretoria CIACS Blog (2)
if curl -fsSL -o "$OUT/artistas/ciacs-diretoria-ciacs-blog-2.jpeg" "$BASEciacs-diretoria-ciacs-blog-2.jpeg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/artistas/ciacs-diretoria-ciacs-blog-2.jpeg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-diretoria-ciacs-blog-2.jpeg"; fi
# 71. Diretoria CIACS (2)
if curl -fsSL -o "$OUT/artistas/ciacs-diretoria-ciacs-site-2.jpg" "$BASEciacs-diretoria-ciacs-site-2.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/artistas/ciacs-diretoria-ciacs-site-2.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-diretoria-ciacs-site-2.jpg"; fi
# 72. Diretoria CIACS (1)
if curl -fsSL -o "$OUT/artistas/ciacs-diretoria-ciacs-site-1.jpg" "$BASEciacs-diretoria-ciacs-site-1.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/artistas/ciacs-diretoria-ciacs-site-1.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-diretoria-ciacs-site-1.jpg"; fi
# 73. Legado CIACS site 4
if curl -fsSL -o "$OUT/galeria/ciacs-legado-site-4.jpg" "$BASEciacs-legado-site-4.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/galeria/ciacs-legado-site-4.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-legado-site-4.jpg"; fi
# 74. Mão em Libras
if curl -fsSL -o "$OUT/outros/ciacs-mao-libras.jpg" "$BASEciacs-mao-libras.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/outros/ciacs-mao-libras.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-mao-libras.jpg"; fi
# 75. Cumprimento
if curl -fsSL -o "$OUT/outros/ciacs-cumprimento.jpg" "$BASEciacs-cumprimento.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/outros/ciacs-cumprimento.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-cumprimento.jpg"; fi
# 76. Teatro Cortina
if curl -fsSL -o "$OUT/outros/ciacs-teatro-cortina.jpg" "$BASEciacs-teatro-cortina.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/outros/ciacs-teatro-cortina.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-teatro-cortina.jpg"; fi
# 77. Galeria de Arte
if curl -fsSL -o "$OUT/outros/ciacs-galeria-arte.jpg" "$BASEciacs-galeria-arte.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/outros/ciacs-galeria-arte.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-galeria-arte.jpg"; fi
# 78. Teatro Ensaio
if curl -fsSL -o "$OUT/outros/ciacs-teatro-ensaio.jpg" "$BASEciacs-teatro-ensaio.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/outros/ciacs-teatro-ensaio.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-teatro-ensaio.jpg"; fi
# 79. Crianças em Aula
if curl -fsSL -o "$OUT/outros/ciacs-criancas-aula.jpg" "$BASEciacs-criancas-aula.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/outros/ciacs-criancas-aula.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-criancas-aula.jpg"; fi
# 80. Equipe Unida
if curl -fsSL -o "$OUT/outros/ciacs-equipe-unida.jpg" "$BASEciacs-equipe-unida.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/outros/ciacs-equipe-unida.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-equipe-unida.jpg"; fi
# 81. Rio de Janeiro
if curl -fsSL -o "$OUT/outros/ciacs-rio-de-janeiro.jpg" "$BASEciacs-rio-de-janeiro.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/outros/ciacs-rio-de-janeiro.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-rio-de-janeiro.jpg"; fi
# 82. Sala de Aula
if curl -fsSL -o "$OUT/outros/ciacs-sala-aula-loft.jpg" "$BASEciacs-sala-aula-loft.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/outros/ciacs-sala-aula-loft.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-sala-aula-loft.jpg"; fi
# 83. Grupo Diverso
if curl -fsSL -o "$OUT/outros/ciacs-grupo-diverso.jpg" "$BASEciacs-grupo-diverso.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/outros/ciacs-grupo-diverso.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-grupo-diverso.jpg"; fi
# 84. Libras Coffee
if curl -fsSL -o "$OUT/outros/ciacs-libras-coffee.jpg" "$BASEciacs-libras-coffee.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/outros/ciacs-libras-coffee.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-libras-coffee.jpg"; fi
# 85. Libras Conversation Cafe
if curl -fsSL -o "$OUT/outros/ciacs-libras-conversation-cafe.jpg" "$BASEciacs-libras-conversation-cafe.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/outros/ciacs-libras-conversation-cafe.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-libras-conversation-cafe.jpg"; fi
# 86. Deaf Conversation
if curl -fsSL -o "$OUT/outros/ciacs-deaf-conversation.jpg" "$BASEciacs-deaf-conversation.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/outros/ciacs-deaf-conversation.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-deaf-conversation.jpg"; fi
# 87. Hands Sign
if curl -fsSL -o "$OUT/outros/ciacs-hands-sign.jpg" "$BASEciacs-hands-sign.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/outros/ciacs-hands-sign.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-hands-sign.jpg"; fi
# 88. Deaf Students
if curl -fsSL -o "$OUT/outros/ciacs-deaf-students.jpg" "$BASEciacs-deaf-students.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/outros/ciacs-deaf-students.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-deaf-students.jpg"; fi
# 89. Community Rio
if curl -fsSL -o "$OUT/outros/ciacs-community-rio.jpg" "$BASEciacs-community-rio.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/outros/ciacs-community-rio.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-community-rio.jpg"; fi
# 90. Theater Stage
if curl -fsSL -o "$OUT/outros/ciacs-theater-stage.jpg" "$BASEciacs-theater-stage.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/outros/ciacs-theater-stage.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-theater-stage.jpg"; fi
# 91. Libras 2
if curl -fsSL -o "$OUT/outros/ciacs-libras-2.jpg" "$BASEciacs-libras-2.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/outros/ciacs-libras-2.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-libras-2.jpg"; fi
# 92. Art Canvas
if curl -fsSL -o "$OUT/outros/ciacs-art-canvas.jpg" "$BASEciacs-art-canvas.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/outros/ciacs-art-canvas.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-art-canvas.jpg"; fi
# 93. Libras Class
if curl -fsSL -o "$OUT/outros/ciacs-libras-class.jpg" "$BASEciacs-libras-class.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/outros/ciacs-libras-class.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-libras-class.jpg"; fi
# 94. Hero Hands
if curl -fsSL -o "$OUT/banners/ciacs-hero-hands.jpg" "$BASEciacs-hero-hands.jpg"; then COUNT=$((COUNT+1)); echo "[$COUNT/94] $OUT/banners/ciacs-hero-hands.jpg"; else FAIL=$((FAIL+1)); echo "FALHA: ciacs-hero-hands.jpg"; fi

echo ""
echo "Concluído: $COUNT/94 baixadas, $FAIL falhas"
echo "Pasta: $OUT/"
ls -la "$OUT/"*/
