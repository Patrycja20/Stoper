# Stoper

![](https://raw.githubusercontent.com/Patrycja20/Stoper/master/screens/stoper1.png)

Stoper to prosty odmierzacz czasu napisany z pomocą React.
Po kliknięciu przycisku `Start` lub klawisza na klawiaturze o nazwie `Spacja` zaczyna odmierzać czas. Aby wstrzymać odmierzanie czasu wystarczy kliknąć przycisk `Stop` lub ponownie `Spacje`. Możemy resetować odmierzony czas za pomocą przycisku `Reset`. 

![](https://raw.githubusercontent.com/Patrycja20/Stoper/master/screens/stoper2.png)

***

### Notatki
`setInterval(function, time)` - funkcja interwałowa, która wykonuje funkcję przekazaną w parametrze nr 1 cyklicznie, co jakiś czas - `time`

`clearInterval(name)` - funkcja zatrzymująca interwał z jednym parametrem - zmienną pod którą, podstawiona została funkcja `setInterval`

`event.keyText` - odczytanie nazwy klawisza z eventu np. `onKeyDown`