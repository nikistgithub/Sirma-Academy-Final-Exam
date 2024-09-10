export const teamsCSV = `
ID,Name,ManagerFullName,Group
1,Germany,Julian Nagelsmann,A
2,Scotland,Steve Clarke,A
3,Hungary,Marco Rossi,A
4,Switzerland,Murat Yakin,A
5,Spain,Luis de la Fuente,B
6,Croatia,Zlatko Dalić,B
7,Italy,Luciano Spalletti,B
8,Albania,Sylvinho,B
9,Slovenia,Matjaž Kek,C
10,Denmark,Kasper Hjulmand,C
11,Serbia,Dragan Stojković,C
12,England,Gareth Southgate,C
13,Poland,Michał Probierz,D
14,Netherlands,Ronald Koeman,D
15,Austria,Ralf Rangnick,D
16,France,Didier Deschamps,D
17,Belgium,Domenico Tedesco,E
18,Slovakia,Francesco Calzona,E
19,Romania,Edward Iordănescu,E
20,Ukraine,Serhiy Rebrov,E
21,Turkey,Vincenzo Montella,F
22,Georgia,Willy Sagnol,F
23,Portugal,Roberto Martínez,F
24,Czech Republic,Ivan Hašek,F
`;

export const matchesCSV = `
ID,ATeamID,BTeamID,Date,Score
1,1,2,6/14/2024,5-1
2,3,4,6/15/2024,1-3
3,5,6,6/15/2024,3-0
4,7,8,6/15/2024,2-1
5,13,14,6/16/2024,1-2
6,11,12,6/16/2024,0-1
7,9,10,6/16/2024,1-1
8,19,20,6/17/2024,3-0
9,15,16,6/17/2024,0-1
10,17,18,6/17/2024,0-1
11,21,22,6/18/2024,3-1
12,23,24,6/18/2024,2-1
13,6,8,6/19/2024,2-2
14,2,4,6/19/2024,1-1
15,1,3,6/19/2024,2-0
16,9,11,6/20/2024,1-1
17,5,7,6/20/2024,1-0
18,10,12,6/20/2024,1-1
19,18,20,6/21/2024,1-2
20,14,16,6/21/2024,0-0
21,13,15,6/21/2024,1-3
22,22,24,6/22/2024,1-1
23,17,19,6/22/2024,2-0
24,21,23,6/22/2024,0-3
25,4,1,6/23/2024,1-1
26,2,3,6/23/2024,0-1
27,8,5,6/24/2024,0-1
28,6,7,6/24/2024,1-1
29,16,13,6/25/2024,1-1
30,10,11,6/25/2024,0-0
31,14,15,6/25/2024,2-3
32,12,9,6/25/2024,0-0
33,18,19,6/26/2024,1-1
34,22,23,6/26/2024,2-0
35,20,17,6/26/2024,0-0
36,24,21,6/26/2024,1-2
37,4,7,6/29/2024,2-0
38,1,10,6/29/2024,2-0
39,12,18,6/30/2024,2-1
40,5,22,6/30/2024,4-1
41,16,17,7/1/2024,1-0
42,23,9,7/1/2024,0(3)-0(0)
43,19,14,7/2/2024,0-3
44,15,21,7/2/2024,1-2
45,5,1,7/5/2024,2-1
46,23,16,7/5/2024,0(3)-0(5)
47,12,4,7/6/2024,1(5)-1(3)
48,14,21,7/6/2024,2-1
49,5,16,7/9/2024,2-1
50,14,12,7/10/2024,1-2
51,5,12,7/14/2024,2-1
`;

export const playersCSV = `
ID,TeamNumber,Position,FullName,TeamID
1,1,GK,Manuel Neuer,1
2,2,DF,Antonio Rüdiger,1
3,3,DF,David Raum,1
4,4,DF,Jonathan Tah,1
5,5,MF,Pascal Groß,1
6,6,DF,Joshua Kimmich,1
7,7,FW,Kai Havertz,1
8,8,MF,Toni Kroos,1
9,9,FW,Niclas Füllkrug,1
10,10,MF,Jamal Musiala,1
11,11,MF,Chris Führich,1
12,12,GK,Oliver Baumann,1
13,13,FW,Thomas Müller,1
14,14,FW,Maximilian Beier,1
15,15,DF,Nico Schlotterbeck,1
16,16,DF,Waldemar Anton,1
17,17,MF,Florian Wirtz,1
18,18,DF,Maximilian Mittelstädt,1
19,19,MF,Leroy Sané,1
20,20,DF,Benjamin Henrichs,1
21,21,MF,İlkay Gündoğan (captain),1
22,22,GK,Marc-André ter Stegen,1
23,23,MF,Robert Andrich,1
24,24,DF,Robin Koch,1
25,25,MF,Emre Can,1
26,26,FW,Deniz Undav,1
27,1,GK,Angus Gunn,2
28,2,DF,Anthony Ralston,2
29,3,DF,Andrew Robertson (captain),2
30,4,MF,Scott McTominay,2
31,5,DF,Grant Hanley,2
32,6,DF,Kieran Tierney,2
33,7,MF,John McGinn,2
34,8,MF,Callum McGregor,2
35,9,FW,Lawrence Shankland,2
36,10,FW,Ché Adams,2
37,11,FW,Ryan Christie,2
38,12,GK,Liam Kelly,2
39,13,DF,Jack Hendry,2
40,14,MF,Billy Gilmour,2
41,15,DF,Ryan Porteous,2
42,16,DF,Liam Cooper,2
43,17,MF,Stuart Armstrong,2
44,18,MF,Lewis Morgan,2
45,19,FW,Tommy Conway,2
46,20,MF,Ryan Jack,2
47,21,GK,Zander Clark,2
48,22,DF,Ross McCrorie,2
49,23,MF,Kenny McLean,2
50,24,DF,Greg Taylor,2
51,25,MF,James Forrest,2
52,26,DF,Scott McKenna,2
53,1,GK,Péter Gulácsi,3
54,2,DF,Ádám Lang,3
55,3,DF,Botond Balogh,3
56,4,DF,Attila Szalai,3
57,5,DF,Attila Fiola,3
58,6,DF,Willi Orbán,3
59,7,DF,Loïc Négo,3
60,8,MF,Ádám Nagy,3
61,9,FW,Martin Ádám,3
62,10,MF,Dominik Szoboszlai (captain),3
63,11,DF,Milos Kerkez,3
64,12,GK,Dénes Dibusz,3
65,13,MF,András Schäfer,3
66,14,DF,Bendegúz Bolla,3
67,15,MF,László Kleinheisler,3
68,16,MF,Dániel Gazdag,3
69,17,MF,Callum Styles,3
70,18,DF,Zsolt Nagy,3
71,19,FW,Barnabás Varga,3
72,20,FW,Roland Sallai,3
73,21,DF,Endre Botka,3
74,22,GK,Péter Szappanos,3
75,23,FW,Kevin Csoboth,3
76,24,DF,Márton Dárdai,3
77,25,FW,Krisztofer Horváth,3
78,26,MF,Mihály Kata,3
79,1,GK,Yann Sommer,4
80,2,DF,Leonidas Stergiou,4
81,3,DF,Silvan Widmer,4
82,4,DF,Nico Elvedi,4
83,5,DF,Manuel Akanji,4
84,6,MF,Denis Zakaria,4
85,7,FW,Breel Embolo,4
86,8,MF,Remo Freuler,4
87,9,FW,Noah Okafor,4
88,10,MF,Granit Xhaka (captain),4
89,11,MF,Renato Steffen,4
90,12,GK,Yvon Mvogo,4
91,13,DF,Ricardo Rodriguez,4
92,14,MF,Steven Zuber,4
93,15,DF,Cédric Zesiger,4
94,16,MF,Vincent Sierro,4
95,17,MF,Ruben Vargas,4
96,18,FW,Kwadwo Duah,4
97,19,FW,Dan Ndoye,4
98,20,MF,Michel Aebischer,4
99,21,GK,Gregor Kobel,4
100,22,DF,Fabian Schär,4
101,23,MF,Xherdan Shaqiri,4
102,24,MF,Ardon Jashari,4
103,25,FW,Zeki Amdouni,4
104,26,MF,Fabian Rieder,4
105,1,GK,David Raya,5
106,2,DF,Dani Carvajal,5
107,3,DF,Robin Le Normand,5
108,4,DF,Nacho,5
109,5,DF,Daniel Vivian,5
110,6,MF,Mikel Merino,5
111,7,FW,Álvaro Morata (captain),5
112,8,MF,Fabián Ruiz,5
113,9,FW,Joselu,5
114,10,FW,Dani Olmo,5
115,11,FW,Ferran Torres,5
116,12,DF,Álex Grimaldo,5
117,13,GK,Álex Remiro,5
118,14,DF,Aymeric Laporte,5
119,15,MF,Álex Baena,5
120,16,MF,Rodri,5
121,17,FW,Nico Williams,5
122,18,MF,Martín Zubimendi,5
123,19,FW,Lamine Yamal,5
124,20,MF,Pedri,5
125,21,FW,Mikel Oyarzabal,5
126,22,DF,Jesús Navas,5
127,23,GK,Unai Simón,5
128,24,DF,Marc Cucurella,5
129,25,MF,Fermín López,5
130,26,FW,Ayoze Pérez,5
131,1,GK,Dominik Livaković,6
132,2,DF,Josip Stanišić,6
133,3,DF,Marin Pongračić,6
134,4,DF,Joško Gvardiol,6
135,5,DF,Martin Erlić,6
136,6,DF,Josip Šutalo,6
137,7,MF,Lovro Majer,6
138,8,MF,Mateo Kovačić,6
139,9,FW,Andrej Kramarić,6
140,10,MF,Luka Modrić (captain),6
141,11,MF,Marcelo Brozović,6
142,12,GK,Nediljko Labrović,6
143,13,MF,Nikola Vlašić,6
144,14,FW,Ivan Perišić,6
145,15,MF,Mario Pašalić,6
146,16,FW,Ante Budimir,6
147,17,FW,Bruno Petković,6
148,18,FW,Luka Ivanušec,6
149,19,DF,Borna Sosa,6
150,20,FW,Marko Pjaca,6
151,21,DF,Domagoj Vida,6
152,22,DF,Josip Juranović,6
153,23,GK,Ivica Ivušić,6
154,24,FW,Marco Pašalić,6
155,25,MF,Luka Sučić,6
156,26,MF,Martin Baturina,6
157,1,GK,Gianluigi Donnarumma (captain),7
158,2,DF,Giovanni Di Lorenzo,7
159,3,DF,Federico Dimarco,7
160,4,DF,Alessandro Buongiorno,7
161,5,DF,Riccardo Calafiori,7
162,6,DF,Federico Gatti,7
163,7,MF,Davide Frattesi,7
164,8,MF,Jorginho,7
165,9,FW,Gianluca Scamacca,7
166,10,MF,Lorenzo Pellegrini,7
167,11,FW,Giacomo Raspadori,7
168,12,GK,Guglielmo Vicario,7
169,13,DF,Matteo Darmian,7
170,14,FW,Federico Chiesa,7
171,15,DF,Raoul Bellanova,7
172,16,MF,Bryan Cristante,7
173,17,DF,Gianluca Mancini,7
174,18,MF,Nicolò Barella,7
175,19,FW,Mateo Retegui,7
176,20,FW,Mattia Zaccagni,7
177,21,MF,Nicolò Fagioli,7
178,22,FW,Stephan El Shaarawy,7
179,23,DF,Alessandro Bastoni,7
180,24,DF,Andrea Cambiaso,7
181,25,FW,Michael Folorunsho,7
182,26,GK,Alex Meret,7
183,1,GK,Etrit Berisha,8
184,2,DF,Iván Balliu,8
185,3,DF,Mario Mitaj,8
186,4,DF,Elseid Hysaj,8
187,5,DF,Arlind Ajeti,8
188,6,DF,Berat Djimsiti (captain),8
189,7,FW,Rey Manaj,8
190,8,MF,Klaus Gjasula,8
191,9,FW,Jasir Asani,8
192,10,MF,Nedim Bajrami,8
193,11,FW,Armando Broja,8
194,12,GK,Elhan Kastrati,8
195,13,DF,Enea Mihaj,8
196,14,MF,Qazim Laçi,8
197,15,MF,Taulant Seferi,8
198,16,FW,Medon Berisha,8
199,17,FW,Ernest Muçi,8
200,18,DF,Ardian Ismajli,8
201,19,FW,Mirlind Daku,8
202,20,MF,Ylber Ramadani,8
203,21,MF,Kristjan Asllani,8
204,22,MF,Amir Abrashi,8
205,23,GK,Thomas Strakosha,8
206,24,DF,Marash Kumbulla,8
207,25,DF,Naser Aliji,8
208,26,FW,Arbër Hoxha,8
209,1,GK,Jan Oblak (captain),9
210,2,DF,Žan Karničnik,9
211,3,DF,Jure Balkovec,9
212,4,DF,Miha Blažič,9
213,5,DF,Jon Gorenc Stanković,9
214,6,DF,Jaka Bijol,9
215,7,MF,Benjamin Verbič,9
216,8,MF,Sandi Lovrić,9
217,9,FW,Andraž Šporar,9
218,10,MF,Timi Max Elšnik,9
219,11,FW,Benjamin Šeško,9
220,12,GK,Vid Belec,9
221,13,DF,Erik Janža,9
222,14,MF,Jasmin Kurtić,9
223,15,MF,Tomi Horvat,9
224,16,GK,Igor Vekić,9
225,17,FW,Jan Mlakar,9
226,18,FW,Žan Vipotnik,9
227,19,FW,Žan Celar,9
228,20,DF,Petar Stojanović,9
229,21,DF,Vanja Drkušić,9
230,22,MF,Adam Gnezda Čerin,9
231,23,DF,David Brekalo,9
232,24,MF,Nino Žugelj,9
233,25,MF,Adrian Zeljković,9
234,26,MF,Josip Iličić,9
235,1,GK,Kasper Schmeichel,10
236,2,DF,Joachim Andersen,10
237,3,DF,Jannik Vestergaard,10
238,4,DF,Simon Kjær (captain),10
239,5,DF,Joakim Mæhle,10
240,6,DF,Andreas Christensen,10
241,7,MF,Mathias Jensen,10
242,8,MF,Thomas Delaney,10
243,9,FW,Rasmus Højlund,10
244,10,MF,Christian Eriksen,10
245,11,FW,Andreas Skov Olsen,10
246,12,FW,Kasper Dolberg,10
247,13,DF,Mathias Jørgensen,10
248,14,FW,Mikkel Damsgaard,10
249,15,MF,Christian Nørgaard,10
250,16,GK,Mads Hermansen,10
251,17,DF,Victor Kristiansen,10
252,18,DF,Alexander Bah,10
253,19,FW,Jonas Wind,10
254,20,FW,Yussuf Poulsen,10
255,21,MF,Morten Hjulmand,10
256,22,GK,Frederik Rønnow,10
257,23,MF,Pierre-Emile Højbjerg,10
258,24,MF,Anders Dreyer,10
259,25,DF,Rasmus Kristensen,10
260,26,MF,Jacob Bruun Larsen,10
261,1,GK,Predrag Rajković,11
262,2,DF,Strahinja Pavlović,11
263,3,DF,Nemanja Stojić,11
264,4,DF,Nikola Milenković,11
265,5,MF,Nemanja Maksimović,11
266,6,MF,Nemanja Gudelj,11
267,7,FW,Dušan Vlahović,11
268,8,FW,Luka Jović,11
269,9,FW,Aleksandar Mitrović,11
270,10,FW,Dušan Tadić (captain),11
271,11,FW,Filip Kostić,11
272,12,GK,Đorđe Petrović,11
273,13,DF,Miloš Veljković,11
274,14,FW,Andrija Živković,11
275,15,DF,Srđan Babić,11
276,16,MF,Srđan Mijailović,11
277,17,MF,Ivan Ilić,11
278,18,FW,Petar Ratkov,11
279,19,MF,Lazar Samardžić,11
280,20,MF,Sergej Milinković-Savić,11
281,21,MF,Mijat Gaćinović,11
282,22,MF,Saša Lukić,11
283,23,GK,Vanja Milinković-Savić,11
284,24,DF,Uroš Spajić,11
285,25,DF,Filip Mladenović,11
286,26,MF,Veljko Birmančević,11
287,1,GK,Jordan Pickford,12
288,2,DF,Kyle Walker,12
289,3,DF,Luke Shaw,12
290,4,MF,Declan Rice,12
291,5,DF,John Stones,12
292,6,DF,Marc Guéhi,12
293,7,FW,Bukayo Saka,12
294,8,DF,Trent Alexander-Arnold,12
295,9,FW,Harry Kane (captain),12
296,10,MF,Jude Bellingham,12
297,11,MF,Phil Foden,12
298,12,DF,Kieran Trippier,12
299,13,GK,Aaron Ramsdale,12
300,14,DF,Ezri Konsa,12
301,15,DF,Lewis Dunk,12
302,16,MF,Conor Gallagher,12
303,17,FW,Ivan Toney,12
304,18,FW,Anthony Gordon,12
305,19,FW,Ollie Watkins,12
306,20,FW,Jarrod Bowen,12
307,21,FW,Eberechi Eze,12
308,22,DF,Joe Gomez,12
309,23,GK,Dean Henderson,12
310,24,MF,Cole Palmer,12
311,25,MF,Adam Wharton,12
312,26,MF,Kobbie Mainoo,12
313,1,GK,Wojciech Szczęsny,13
314,2,DF,Bartosz Salamon,13
315,3,MF,Paweł Dawidowicz,13
316,4,DF,Sebastian Walukiewicz,13
317,5,DF,Jan Bednarek,13
318,6,MF,Jakub Piotrowski,13
319,7,FW,Karol Świderski,13
320,8,MF,Jakub Moder,13
321,9,FW,Robert Lewandowski (captain),13
322,10,MF,Piotr Zieliński,13
323,11,MF,Kamil Grosicki,13
324,12,GK,Łukasz Skorupski,13
325,13,MF,Taras Romanczuk,13
326,14,DF,Jakub Kiwior,13
327,15,DF,Tymoteusz Puchacz,13
328,16,FW,Adam Buksa,13
329,17,MF,Damian Szymański,13
330,18,DF,Bartosz Bereszyński,13
331,19,DF,Przemysław Frankowski,13
332,20,MF,Sebastian Szymański,13
333,21,MF,Nicola Zalewski,13
334,22,GK,Marcin Bułka,13
335,23,FW,Krzysztof Piątek,13
336,24,MF,Bartosz Slisz,13
337,25,FW,Michał Skóraś,13
338,26,MF,Kacper Urbański,13
339,1,GK,Bart Verbruggen,14
340,2,DF,Lutsharel Geertruida,14
341,3,DF,Matthijs de Ligt,14
342,4,DF,Virgil van Dijk (captain),14
343,5,DF,Nathan Aké,14
344,6,DF,Stefan de Vrij,14
345,7,FW,Xavi Simons,14
346,8,MF,Georginio Wijnaldum,14
347,9,FW,Wout Weghorst,14
348,10,FW,Memphis Depay,14
349,11,FW,Cody Gakpo,14
350,12,FW,Jeremie Frimpong,14
351,13,GK,Justin Bijlow,14
352,14,MF,Tijjani Reijnders,14
353,15,DF,Micky van de Ven,14
354,16,MF,Joey Veerman,14
355,17,DF,Daley Blind,14
356,18,FW,Donyell Malen,14
357,19,FW,Brian Brobbey,14
358,20,MF,Ian Maatsen,14
359,21,FW,Joshua Zirkzee,14
360,22,DF,Denzel Dumfries,14
361,23,GK,Mark Flekken,14
362,24,MF,Jerdy Schouten,14
363,25,FW,Steven Bergwijn,14
364,26,MF,Ryan Gravenberch,14
365,1,GK,Heinz Lindner,15
366,2,DF,Maximilian Wöber,15
367,3,DF,Gernot Trauner,15
368,4,DF,Kevin Danso,15
369,5,DF,Stefan Posch,15
370,6,MF,Nicolas Seiwald,15
371,7,FW,Marko Arnautović (captain),15
372,8,MF,Alexander Prass,15
373,9,MF,Marcel Sabitzer,15
374,10,MF,Florian Grillitsch,15
375,11,FW,Michael Gregoritsch,15
376,12,GK,Niklas Hedl,15
377,13,GK,Patrick Pentz,15
378,14,DF,Leopold Querfeld,15
379,15,DF,Philipp Lienhart,15
380,16,DF,Phillipp Mwene,15
381,17,MF,Florian Kainz,15
382,18,MF,Romano Schmid,15
383,19,MF,Christoph Baumgartner,15
384,20,MF,Konrad Laimer,15
385,21,DF,Flavius Daniliuc,15
386,22,MF,Matthias Seidl,15
387,23,DF,Patrick Wimmer,15
388,24,FW,Andreas Weimann,15
389,25,FW,Maximilian Entrup,15
390,26,MF,Marco Grüll,15
391,1,GK,Brice Samba,16
392,2,DF,Benjamin Pavard,16
393,3,DF,Ferland Mendy,16
394,4,DF,Dayot Upamecano,16
395,5,DF,Jules Koundé,16
396,6,MF,Eduardo Camavinga,16
397,7,FW,Antoine Griezmann,16
398,8,MF,Aurélien Tchouaméni,16
399,9,FW,Olivier Giroud,16
400,10,FW,Kylian Mbappé (captain),16
401,11,FW,Ousmane Dembélé,16
402,12,FW,Randal Kolo Muani,16
403,13,MF,N'Golo Kanté,16
404,14,MF,Adrien Rabiot,16
405,15,FW,Marcus Thuram,16
406,16,GK,Mike Maignan,16
407,17,DF,William Saliba,16
408,18,MF,Warren Zaïre-Emery,16
409,19,MF,Youssouf Fofana,16
410,20,FW,Kingsley Coman,16
411,21,DF,Jonathan Clauss,16
412,22,DF,Théo Hernandez,16
413,23,GK,Alphonse Areola,16
414,24,DF,Ibrahima Konaté,16
415,25,FW,Bradley Barcola,16
416,1,GK,Koen Casteels,17
417,2,DF,Zeno Debast,17
418,3,DF,Arthur Theate,17
419,4,DF,Wout Faes,17
420,5,DF,Jan Vertonghen,17
421,6,MF,Axel Witsel,17
422,7,MF,Kevin De Bruyne (captain),17
423,8,MF,Youri Tielemans,17
424,9,MF,Leandro Trossard,17
425,10,FW,Romelu Lukaku,17
426,11,FW,Yannick Carrasco,17
427,12,GK,Thomas Kaminski,17
428,13,GK,Matz Sels,17
429,14,FW,Dodi Lukebakio,17
430,15,DF,Thomas Meunier,17
431,16,MF,Aster Vranckx,17
432,17,FW,Charles De Ketelaere,17
433,18,MF,Orel Mangala,17
434,19,FW,Johan Bakayoko,17
435,20,FW,Loïs Openda,17
436,21,DF,Timothy Castagne,17
437,22,FW,Jérémy Doku,17
438,23,MF,Arthur Vermeeren,17
439,24,MF,Amadou Onana,17
440,25,MF,Maxim De Cuyper,17
441,1,GK,Martin Dúbravka,18
442,2,DF,Peter Pekarík,18
443,3,DF,Denis Vavro,18
444,4,DF,Adam Obert,18
445,5,MF,Tomáš Rigo,18
446,6,DF,Norbert Gyömbér,18
447,7,FW,Tomáš Suslov,18
448,8,MF,Ondrej Duda,18
449,9,FW,Róbert Boženík,18
450,10,FW,Ľubomír Tupta,18
451,11,MF,László Bénes,18
452,12,GK,Marek Rodák,18
453,13,MF,Patrik Hrošovský,18
454,14,DF,Milan Škriniar (captain),18
455,15,DF,Vernon De Marco,18
456,16,DF,Dávid Hancko,18
457,17,FW,Lukáš Haraslín,18
458,18,FW,David Strelec,18
459,19,MF,Juraj Kucka,18
460,20,FW,Dávid Ďuriš,18
461,21,MF,Matúš Bero,18
462,22,MF,Stanislav Lobotka,18
463,23,GK,Henrich Ravas,18
464,24,FW,Leo Sauer,18
465,25,DF,Sebastian Kóša,18
466,26,FW,Ivan Schranz,18
467,1,GK,Florin Niță,19
468,2,DF,Andrei Rațiu,19
469,3,DF,Radu Drăgușin,19
470,4,DF,Adrian Rus,19
471,5,DF,Ionuț Nedelcearu,19
472,6,MF,Marius Marin,19
473,7,FW,Denis Alibec,19
474,8,MF,Alexandru Cicâldău,19
475,9,FW,George Pușcaș,19
476,10,MF,Ianis Hagi,19
477,11,DF,Nicușor Bancu,19
478,12,GK,Horațiu Moldovan,19
479,13,FW,Valentin Mihăilă,19
480,14,MF,Darius Olaru,19
481,15,DF,Andrei Burcă,19
482,16,GK,Ștefan Târnovanu,19
483,17,FW,Florinel Coman,19
484,18,MF,Răzvan Marin,19
485,19,FW,Denis Drăguș,19
486,20,FW,Dennis Man,19
487,21,MF,Nicolae Stanciu (captain),19
488,22,DF,Vasile Mogoș,19
489,23,MF,Deian Sorescu,19
490,24,DF,Bogdan Racovițan,19
491,25,FW,Daniel Bîrligea,19
492,26,MF,Adrian Șut,19
493,1,GK,Heorhiy Bushchan,20
494,2,DF,Yukhym Konoplya,20
495,3,DF,Oleksandr Svatok,20
496,4,DF,Maksym Talovyerov,20
497,5,MF,Serhiy Sydorchuk,20
498,6,MF,Taras Stepanenko,20
499,7,MF,Andriy Yarmolenko (captain),20
500,8,MF,Ruslan Malinovskyi,20
501,9,FW,Roman Yaremchuk,20
502,10,FW,Mykhaylo Mudryk,20
503,11,FW,Artem Dovbyk,20
504,12,GK,Anatoliy Trubin,20
505,13,DF,Illya Zabarnyi,20
506,14,MF,Heorhiy Sudakov,20
507,15,MF,Viktor Tsyhankov,20
508,16,DF,Vitaliy Mykolenko,20
509,17,DF,Oleksandr Zinchenko,20
510,18,MF,Volodymyr Brazhko,20
511,19,MF,Mykola Shaparenko,20
512,20,MF,Oleksandr Zubkov,20
513,21,DF,Valeriy Bondar,20
514,22,DF,Mykola Matviyenko,20
515,23,GK,Andriy Lunin,20
516,24,DF,Oleksandr Tymchyk,20
517,25,FW,Vladyslav Vanat,20
518,26,DF,Bohdan Mykhaylichenko,20
519,1,GK,Mert Günok,21
520,2,DF,Zeki Çelik,21
521,3,DF,Merih Demiral,21
522,4,DF,Samet Akaydin,21
523,5,MF,Okay Yokuşlu,21
524,6,MF,Orkun Kökçü,21
525,7,FW,Kerem Aktürkoğlu,21
526,8,FW,Arda Güler,21
527,9,FW,Cenk Tosun,21
528,10,MF,Hakan Çalhanoğlu (captain),21
529,11,FW,Yusuf Yazıcı,21
530,12,GK,Altay Bayındır,21
531,13,DF,Ahmetcan Kaplan,21
532,14,DF,Abdülkerim Bardakcı,21
533,15,MF,Salih Özcan,21
534,16,MF,İsmail Yüksek,21
535,17,FW,İrfan Kahveci,21
536,18,DF,Mert Müldür,21
537,19,FW,Kenan Yıldız,21
538,20,DF,Ferdi Kadıoğlu,21
539,21,FW,Barış Alper Yılmaz,21
540,22,MF,Kaan Ayhan,21
541,23,GK,Uğurcan Çakır,21
542,24,FW,Semih Kılıçsoy,21
543,25,FW,Yunus Akgün,21
544,26,FW,Bertuğ Yıldırım,21
545,1,GK,Giorgi Loria,22
546,2,DF,Otar Kakabadze,22
547,3,DF,Lasha Dvali,22
548,4,DF,Guram Kashia (captain),22
549,5,DF,Solomon Kvirkvelia,22
550,6,MF,Giorgi Kochorashvili,22
551,7,FW,Khvicha Kvaratskhelia,22
552,8,FW,Budu Zivzivadze,22
553,9,MF,Zuriko Davitashvili,22
554,10,MF,Giorgi Chakvetadze,22
555,11,FW,Giorgi Kvilitaia,22
556,12,GK,Luka Gugeshashvili,22
557,13,DF,Giorgi Gocholeishvili,22
558,14,DF,Luka Lochoshvili,22
559,15,DF,Giorgi Gvelesiani,22
560,16,MF,Nika Kvekveskiri,22
561,17,MF,Otar Kiteishvili,22
562,18,MF,Sandro Altunashvili,22
563,19,MF,Levan Shengelia,22
564,20,MF,Anzor Mekvabishvili,22
565,21,MF,Giorgi Tsitaishvili,22
566,22,FW,Georges Mikautadze,22
567,23,MF,Saba Lobzhanidze,22
568,24,DF,Jemal Tabidze,22
569,25,GK,Giorgi Mamardashvili,22
570,26,MF,Gabriel Sigua,22
571,1,GK,Rui Patrício,23
572,2,DF,Nélson Semedo,23
573,3,DF,Pepe,23
574,4,DF,Rúben Dias,23
575,5,DF,Diogo Dalot,23
576,6,MF,João Palhinha,23
577,7,FW,Cristiano Ronaldo (captain),23
578,8,MF,Bruno Fernandes,23
579,9,FW,Gonçalo Ramos,23
580,10,MF,Bernardo Silva,23
581,11,FW,João Félix,23
582,12,GK,José Sá,23
583,13,MF,Danilo Pereira,23
584,14,DF,Gonçalo Inácio,23
585,15,MF,João Neves,23
586,16,MF,Matheus Nunes,23
587,17,FW,Rafael Leão,23
588,18,MF,Rúben Neves,23
589,19,DF,Nuno Mendes,23
590,20,DF,João Cancelo,23
591,21,FW,Diogo Jota,23
592,22,GK,Diogo Costa,23
593,23,MF,Vitinha,23
594,24,DF,António Silva,23
595,25,MF,Pedro Neto,23
596,26,FW,Francisco Conceição,23
597,1,GK,Jindřich Staněk,24
598,2,DF,David Zima,24
599,3,MF,Tomáš Holeš,24
600,4,DF,Robin Hranáč,24
601,5,DF,Vladimír Coufal,24
602,6,DF,Martin Vitík,24
603,7,MF,Antonín Barák,24
604,8,MF,Petr Ševčík,24
605,9,FW,Adam Hložek,24
606,10,FW,Patrik Schick,24
607,11,FW,Jan Kuchta,24
608,12,DF,David Douděra,24
609,13,FW,Mojmír Chytil,24
610,14,MF,Lukáš Provod,24
611,15,DF,David Jurásek,24
612,16,GK,Matěj Kovář,24
613,17,FW,Václav Černý,24
614,18,DF,Ladislav Krejčí,24
615,19,FW,Tomáš Chorý,24
616,20,MF,Ondřej Lingr,24
617,21,MF,Lukáš Červ,24
618,22,MF,Tomáš Souček (captain),24
619,23,GK,Vítězslav Jaroš,24
620,24,DF,Tomáš Vlček,24
621,25,MF,Pavel Šulc,24
622,26,MF,Matěj Jurásek,24
`;