$HostAddress = if ($env:DEV_HOST) { $env:DEV_HOST } else { "192.168.75.72" }
$Port = if ($env:DEV_PORT) { $env:DEV_PORT } else { "3000" }
$Url = "http://$HostAddress`:$Port/"

Start-Job -ScriptBlock {
  param($TargetUrl)
  Start-Sleep -Seconds 2
  Start-Process "chrome.exe" -ArgumentList "--new-window", $TargetUrl
} -ArgumentList $Url | Out-Null

Write-Host "Opening Chrome at $Url"
yarn next dev -H $HostAddress -p $Port