from pydantic import BaseModel

class WallpaperCreate(BaseModel):
    image: str
    product_name: str
    price: float
    category: str

class Wallpaper(WallpaperCreate):
    id: int

    class Config:
        orm_mode = True

class OrderCreate(BaseModel):
    product_id: int
    area: float
    total_amount: float

class Order(OrderCreate):
    id: int

    class Config:
        orm_mode = True
