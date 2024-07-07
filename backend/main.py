from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from . import schemas, crud
from .database import SessionLocal, engine, Base

app = FastAPI()

Base.metadata.create_all(bind=engine)

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# GET endpoint to retrieve wallpapers by category
@app.get("/wallpaper", response_model=list[schemas.Wallpaper])
def get_wallpaper(wallpaper_key: str, db: Session = Depends(get_db)):
    wallpapers = crud.get_wallpaper_by_category(db, category=wallpaper_key)
    if not wallpapers:
        raise HTTPException(status_code=404, detail="Wallpaper key not found")
    return wallpapers

# POST endpoint to create a new wallpaper
@app.post("/wallpaper", response_model=schemas.Wallpaper)
def create_wallpaper(wallpaper: schemas.WallpaperCreate, db: Session = Depends(get_db)):
    return crud.create_wallpaper(db=db, wallpaper=wallpaper)

# POST endpoint to place an order
@app.post("/order-placing", response_model=schemas.Order)
def place_order(order: schemas.OrderCreate, db: Session = Depends(get_db)):
    return crud.create_order(db=db, order=order)