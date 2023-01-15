$path = "C:\ProgramData\Microsoft\Windows\Start Menu\Programs"

$shell = New-Object -ComObject WScript.Shell

Get-ChildItem $path -Include *.lnk -Recurse | ForEach-Object {

$link = $_

$shortcut = $shell.CreateShortcut($link.FullName)

[PSCustomObject]@{

Name = $link.Name

Path = $link.FullName

TargetPath = $shortcut.TargetPath

Arguments = $shortcut.Arguments

StartIn = $shortcut.WorkingDirectory

Description = $shortcut.Description

}

} | Out-GridView

$shortcuts | Export-Csv -Path "C:\ProgramData\Microsoft\Windows\StartMenuPrograms-Links.csv" -NoTypeInformation

$folders = Get-ChildItem -Path $path -Directory

foreach ($folder in $folders) {

if ((Get-ChildItem -Path $folder.FullName -Force -ErrorAction SilentlyContinue) -eq $null) {

Write-Host "Folder $($folder.FullName) is empty" -ForegroundColor Red

}

}