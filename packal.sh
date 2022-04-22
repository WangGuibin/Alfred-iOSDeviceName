#! /bin/bash
CurrentDirName=$(basename `pwd`)
version='1.0.0'
if [[ -n $1 ]]; 
then
version=$1 
fi 

/usr/libexec/PlistBuddy -c "set :name '${CurrentDirName}v${version}' " info.plist
/usr/libexec/PlistBuddy -c "set :version '${version}' " info.plist

echo "\033[32;49;1m ================== 打包准备就绪 =====================\033[39;49;0m"
echo "\033[32;49;1mbundleid:\033[39;49;0m"
/usr/libexec/PlistBuddy -c "print bundleid" info.plist
echo "\033[32;49;1mname:\033[39;49;0m"
/usr/libexec/PlistBuddy -c "print name" info.plist
echo "\033[32;49;1mversion:\033[39;49;0m"
/usr/libexec/PlistBuddy -c "print version" info.plist

echo "\033[32;49;1m ================== 开始打包 =====================\033[39;49;0m"
startTime=`date +%s`
zip -qryX ../$CurrentDirName.alfredworkflow  *
endTime=`date +%s`
echo "\033[32;49;1m ================== 打包成功!!🔥 =====================\033[39;49;0m"
speadTime=`expr $endTime - $startTime`
echo "\033[1;3;32m打包耗时: ${speadTime} 秒 \033[m"
#open ../
