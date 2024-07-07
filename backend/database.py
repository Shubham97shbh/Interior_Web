from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "sqlite:///./Interior.db"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class Wallpaper(Base):
    __tablename__ = "wallpapers"
    
    id = Column(Integer, primary_key=True, index=True)
    image = Column(String, index=True)
    product_name = Column(String, index=True)
    price = Column(Float, index=True)
    category = Column(String, index=True)  # premium or exclusive

class Order(Base):
    __tablename__ = "orders"
    
    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, index=True)
    area = Column(Float)
    total_amount = Column(Float)

Base.metadata.create_all(bind=engine)
