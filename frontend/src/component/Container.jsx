import React from 'react'
import { MainContainer } from './maincontainer/MainContainer'
import { PremiumWallPaper } from './premium_wall/PremiumWallPaper'
import { ExclusiveCollection } from './exclu_collection/ExclusiveCollection'
import { HomeDecor } from './homedecor/HomeDecor'
import { CustomerReview } from './customer_review/CustomerReview'
import { CustomizedWall } from './cust_wallpaper/CustomizedWall'
import { WallpaperRoom } from './wall_room/WallpaperRoom'
import { LovedWallpare } from './loved_wall/LovedWallpare'

export const Container = () => {
    return (
        <div>
            <MainContainer />
            <PremiumWallPaper />
            <ExclusiveCollection />
            <HomeDecor />
            <CustomizedWall />

            <WallpaperRoom />
            <CustomerReview />
            <LovedWallpare />
        </div>
    )
}
