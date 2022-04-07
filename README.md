## Пожалуйста прочитайте

https://inquisitive-kringle-af8b07.netlify.app/ 

это демо

Всего два основных роутинга

1. /login(public)

2. /views(for auth)

## Представьте ситуацию

1. Вы заходите сразу на роутинг /views, приложение вас сразу допустит туда при условии,
    что у вас в sessionStorage хранится accessToken.
   
2. Если токен не валидный для получения списка сайтов, то произойдет рефреш токена, и если ответ 
    от рефреш токена тоже будет не валидный токен, то произойдет переадресация на страницу логина.
   Приложение это делает, однако чтобы проверить это, Вам нужно будет поменять sessionStorage что-то наподобие 
   localStorage. Поскольку после закрытия сайта, данные о токене также пропадут
   
## Ответ на возможный вопрос
1. Почему деструктуризацией не пользуешься? Зачем писать такие громоздкие выражения как это
    rootStore.UserStore.something.again.something ....
   
   > Просто удобно из-за автокомплита, ну и плюс данные я получаю мгновенно нежели с деструктуризацией,
   > поскольку происходит замыкание, данные будут отставать грубо говоря
   
