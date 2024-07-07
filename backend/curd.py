from sqlalchemy.orm import Session
from . import models, schemas

def get_wallpaper_by_category(db: Session, category: str):
    return db.query(models.Wallpaper).filter(models.Wallpaper.category == category).all()

def create_wallpaper(db: Session, wallpaper: schemas.WallpaperCreate):
    db_wallpaper = models.Wallpaper(**wallpaper.dict())
    db.add(db_wallpaper)
    db.commit()
    db.refresh(db_wallpaper)
    return db_wallpaper

def create_order(db: Session, order: schemas.OrderCreate):
    db_order = models.Order(**order.dict())
    db.add(db_order)
    db.commit()
    db.refresh(db_order)
    return db_order
