#! /bin/sh

cdir=`pwd`
srvDir="$1/ficloud/hotwebs/"
modules=("common" "account" "home" "voucher")
resources=("static" "views" "config")

outputDir=${cdir}"/output/"
statiDir=${srvDir}
WEBINFDir=${srvDir}"ficloud/WEB-INF"

testDir=${srvDir}"WEB-INF"

DoBuild(){
  for module in ${modules[@]}
  do
    moduleDir="${cdir}/${module}"
    
    echo "开始编译"${module}"子系统"

    cd ${moduleDir} && jello release -d ../output

    echo "子系统"${module}"编译完成"
  done
}


DoDeploy(){
  echo "开始部署静态资源到工程中"
  cp -R ${outputDir}"static" ${statiDir}
  echo "静态资源部署完成"

  echo "开始部署config文件到工程中"
  cp -R ${outputDir}"WEB-INF/config" ${WEBINFDir}
  echo "config文件部署完成"

  echo "开始部署JSP模版文件到工程中"
  cp -R ${outputDir}"WEB-INF/views" ${WEBINFDir}
  echo "模版文件部署完成"

}


DoBuild

DoDeploy

rm -rf ${outputDir}

echo "删除output编译目录"

echo "编译部署完成!"

