const fs = require('fs'); 

module.exports = (dryRun) => {
    const packageJson = JSON.parse(
        fs.readFileSync(`${__dirname}/package.json`, 'utf8')
    );
    
    const {
        dependencies = {},
        devDependencies = {},
    } = packageJson;
    
    let updatedPackageJson = {...packageJson};
    
    const checkDeps = (deps, type) => {
        Object.entries(deps).forEach(([depName, depVersion]) => {
            const installedVersion = require(`${__dirname}/node_modules/${depName}/package.json`).version; 
            if (dryRun) {
                console.log(`${depName}`);
                console.log(`InstalledVersion: ${installedVersion}`);
                console.log(`DepVersion: ${depVersion}`);
                console.log('------------------');
            } else {
                updatedPackageJson[type][depName] = installedVersion;
            }
        })
    }
    
    checkDeps(dependencies, 'dependencies');
    checkDeps(devDependencies, 'devDependencies');
    
    //save package.json
    fs.writeFileSync(`${__dirname}/package.json`, JSON.stringify(updatedPackageJson, null, 4));
};