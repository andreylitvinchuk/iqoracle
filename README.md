# API Documentstion 

структура данных
https://drive.google.com/file/d/0B9IdJugjTyzGY0h4dXByUEs4dEE/view?usp=sharing

## root:
```
/api/v1/
```

## Данные с forexprotools
полуает данные с forexprotools
```
GET: /api/v1/forexprotools/

```

```
{
    action: 'refresher',
    pairs: '1,2,3,',
    timeframe=10
}
```

## Прогноз пользователя
### Создание
``` 
POST: /api/v1/user_rate/
```
user_id
: id пользвователя

event_id
: id события

rate_points
: количество поинтов, на котороые играет пользователь
 
rate_type
: тип ставки, 'binary'/'agregate'

rate_value
: значение ставки

rate_direction
: направление ставки, 'up'/'down'

возможные ответы:
```
{
    "status": "error",
    "message": "User doesn't have enought points",
    "timestamp": "2017-04-22T22:40:49.183+03:00"
}
```
```
{
    "status": "success",
    "user": {
        "id": 1,
        "rate_points": 4,
        "email": "test@example.com",
        "created_at": "2017-04-22T12:01:14.756+03:00",
        "updated_at": "2017-04-22T22:43:41.571+03:00"
    },
    "timestamp": "2017-04-22T22:43:41.577+03:00"
}
```

## События
