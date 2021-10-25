# staccChallenge
Stacc sin kodeoppgave

# Oppgavebeskrivelse
I Stacc sin kodeoppgave valgte jeg å lage et enkelt dashboard som tillater brukeren å godkjenne/avslå søknader og få informasjon om personen som søker er en politisk eksponert figur. Jeg fetcher API og kjører en konstant liste med navn og ID mot dataen jeg henter. Om programmet huker sjekk på at både Navn OG ID matcher, da vil det displayes at personen som søker er politisk eksponert.

Jeg valgte å løse programmet ved hjelp av rammeverktøyet/biblioteket React.js. Jeg har hatt erfaring med dette før og konkluderte med at å løse oppgaven i React vil gi best uttelling for min del. 

I forkant av prosjektet gjorde jeg research på hvordan man gjennomfører en PEP check, tegnet frihånd på papir for å finne design, og kom frem til farger ved å teste de opp mot hverandre. Jeg hadde en vis idé om hvilke farger jeg ønsket å bruke når oppgaven ble utlevert. Det ble gjort i såkalt "dark mode" da jeg syntes det er "snillere" mot øynene.

# HOWTO - Run Project
For å kjøre prosjektet må det selvfølgelig clones.
Ha NPM installert, naviger deg frem til mappen /stacc-coding-competetetion (liten typo der ja) i terminal(cd) og kjør "npm install" så "npm start".

# Kommentar
Som dere kan se er besvarelsen min veldig "frontend" og design heavy, da dette er det jeg kan aller best og syntes er morsomt å jobbe med. Jeg følte det var viktig å legge vekt på kvalitetene jeg har, istedenfor å tilegne alt for mye funksjonalitet som jeg ville hatt vanskeligheter med å forklare eller gjennomføre uten alt for mye Stackoverflow. Grunnen til at jeg valgte å legge det opp i et dashboard format var fordi jeg ønsket å simulere en PEP-check prosess fra ståstedet til en som fysisk behandler søknader.

NB! Det er ikke tatt høyde for responsivitet, så oppgaven vises best på større skjermer.
