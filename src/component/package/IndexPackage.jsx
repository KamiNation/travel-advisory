import React from 'react'
import PackageHome from './PackageHome'
import PackageContextProvider from './PackageContext'

const IndexPackage = () => {
    return (
            <PackageContextProvider>
                <PackageHome />
            </PackageContextProvider>
    )
}

export default IndexPackage