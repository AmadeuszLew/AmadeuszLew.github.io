# Główne zasady
1. Język: Zawsze używaj TypeScript. Unikaj 'any', używaj ścisłego typowania i interfejsów/typów.
2. Architektura: Pisz małe, testowalne funkcje i komponenty. Twórz nazwy funkcji i zmiennych, które jasno mówią, co robi dany fragment kodu (samo-dokumentujący się kod).
3. Komentarze: Pisz komentarze tylko wtedy, gdy logika biznesowa jest bardzo skomplikowana lub nieoczywista (wyjaśniaj "dlaczego", a nie "co").
4. Style: Do stylizacji używaj wyłącznie Tailwind CSS. Unikaj pisania niestandardowego CSS, chyba że to absolutnie konieczne.

# Nowoczesny Angular (Best Practices)
5. Komponenty: Zawsze twórz Standalone Components (`standalone: true`). Nie używaj `NgModule`, chyba że integrujesz starą zewnętrzną bibliotekę.
6. Stan i Reaktywność: Zamiast `BehaviorSubject` i RxJS do lokalnego zarządzania stanem, domyślnie używaj Angular Signals (`signal`, `computed`, `effect`). Zostaw RxJS tylko do obsługi asynchronicznych strumieni (np. `HttpClient`, `Router` events, zaawansowane operatory czasu).
7. Dependency Injection: Nie używaj konstruktorów do wstrzykiwania zależności. Zamiast tego zawsze korzystaj z funkcji `inject()` (np. `private authService = inject(AuthService);`).
8. Szablony (HTML): Używaj nowej, wbudowanej składni Control Flow (`@if`, `@for`, `@switch`, `@empty`) zamiast starych dyrektyw strukturalnych (`*ngIf`, `*ngFor`, `*ngSwitch`).
9. Wejścia/Wyjścia: Używaj nowych API bazujących na sygnałach, tj. `input()`, `output()` i `model()` zamiast dekoratorów `@Input()` i `@Output()`.