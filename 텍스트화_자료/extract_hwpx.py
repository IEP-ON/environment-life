#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
HWPX 파일에서 텍스트를 추출하는 스크립트
HWPX는 ZIP 압축된 XML 파일 형식
작성일: 2025-11-08
"""

import os
import sys
from pathlib import Path
import zipfile
import xml.etree.ElementTree as ET
from bs4 import BeautifulSoup
import traceback

# 경로 설정
BASE_DIR = Path(__file__).parent.parent
SOURCE_DIR = BASE_DIR / "자료 모음"
OUTPUT_DIR = Path(__file__).parent

# 출력 디렉터리 생성
HWPX_OUTPUT_DIR = OUTPUT_DIR / "03_HWPX파일"
HWPX_OUTPUT_DIR.mkdir(exist_ok=True)

def sanitize_filename(filename):
    """파일명에서 특수문자 제거 및 정리"""
    # 확장자 제거
    name = os.path.splitext(filename)[0]
    # 특수문자 제거 및 공백을 언더스코어로 변경
    name = name.replace(" ", "_")
    name = name.replace("(", "").replace(")", "")
    name = name.replace("+", "_")
    name = name.replace(",", "")
    # 연속된 언더스코어 제거
    while "__" in name:
        name = name.replace("__", "_")
    return name[:100]  # 파일명 길이 제한

def extract_text_from_hwpx(hwpx_path, output_path):
    """HWPX 파일에서 텍스트 추출"""
    try:
        print(f"  처리 중: {hwpx_path.name}")
        text_content = []
        text_content.append(f"=" * 80)
        text_content.append(f"파일명: {hwpx_path.name}")
        text_content.append(f"파일 크기: {hwpx_path.stat().st_size / (1024*1024):.2f} MB")
        text_content.append(f"=" * 80)
        text_content.append("")
        
        # HWPX는 ZIP 파일
        with zipfile.ZipFile(hwpx_path, 'r') as zip_ref:
            # Contents 폴더 내의 섹션 파일들 찾기
            section_files = [f for f in zip_ref.namelist() if f.startswith('Contents/section') and f.endswith('.xml')]
            section_files.sort()
            
            if not section_files:
                text_content.append("[HWPX 파일 내에서 텍스트 섹션을 찾을 수 없습니다.]")
            else:
                text_content.append(f"총 섹션 수: {len(section_files)}\n")
                
                for idx, section_file in enumerate(section_files, 1):
                    text_content.append(f"\n{'='*80}")
                    text_content.append(f"섹션 {idx}/{len(section_files)}")
                    text_content.append(f"{'='*80}\n")
                    
                    try:
                        # XML 파일 읽기
                        with zip_ref.open(section_file) as xml_file:
                            xml_content = xml_file.read()
                            
                            # BeautifulSoup으로 파싱 (XML 태그 제거)
                            soup = BeautifulSoup(xml_content, 'xml')
                            
                            # 텍스트 추출 (t 태그에 텍스트가 들어있음)
                            text_elements = soup.find_all('t')
                            
                            if text_elements:
                                section_text = []
                                for elem in text_elements:
                                    if elem.string:
                                        section_text.append(elem.string.strip())
                                
                                if section_text:
                                    text_content.append('\n'.join(section_text))
                                else:
                                    text_content.append("[이 섹션에는 추출 가능한 텍스트가 없습니다.]")
                            else:
                                # t 태그가 없으면 모든 텍스트 추출 시도
                                all_text = soup.get_text(strip=True)
                                if all_text:
                                    text_content.append(all_text)
                                else:
                                    text_content.append("[이 섹션에는 텍스트가 없습니다.]")
                    
                    except Exception as e:
                        text_content.append(f"[섹션 {idx} 처리 중 오류: {str(e)}]")
                    
                    # 진행상황 표시
                    if idx % 5 == 0:
                        print(f"    진행: {idx}/{len(section_files)} 섹션")
        
        # 파일 저장
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(text_content))
        
        print(f"  ✅ 완료: {output_path.name} ({len(section_files)} 섹션)")
        return True, len(section_files)
        
    except zipfile.BadZipFile:
        error_msg = f"  ❌ 오류: {hwpx_path.name}는 유효한 HWPX 파일이 아닙니다."
        print(error_msg)
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(f"오류: 유효하지 않은 HWPX 파일\n")
            f.write(f"파일명: {hwpx_path.name}\n")
        return False, 0
        
    except Exception as e:
        error_msg = f"  ❌ 오류 발생: {hwpx_path.name}\n     {str(e)}"
        print(error_msg)
        # 오류 로그 저장
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(f"오류 발생: {hwpx_path.name}\n")
            f.write(f"오류 내용: {str(e)}\n\n")
            f.write(traceback.format_exc())
        return False, 0

def find_hwpx_files(directory):
    """HWPX 파일을 재귀적으로 찾기"""
    files = []
    for root, dirs, filenames in os.walk(directory):
        for filename in filenames:
            if filename.lower().endswith('.hwpx'):
                files.append(Path(root) / filename)
    return files

def main():
    print("\n" + "="*80)
    print("📚 HWPX 파일 텍스트 추출 시작")
    print("="*80 + "\n")
    
    # HWPX 파일 검색
    print("🔍 HWPX 파일 검색 중...")
    hwpx_files = find_hwpx_files(SOURCE_DIR)
    print(f"   발견된 HWPX 파일: {len(hwpx_files)}개\n")
    
    if not hwpx_files:
        print("⚠️  HWPX 파일을 찾을 수 없습니다.")
        return
    
    hwpx_success = 0
    hwpx_fail = 0
    hwpx_total_sections = 0
    
    print("📄 HWPX 파일 텍스트 추출 시작\n")
    for hwpx_file in hwpx_files:
        # 상대 경로 계산
        rel_path = hwpx_file.relative_to(SOURCE_DIR)
        # 출력 파일명 생성
        safe_name = sanitize_filename(hwpx_file.name)
        output_file = HWPX_OUTPUT_DIR / f"{safe_name}.txt"
        
        success, sections = extract_text_from_hwpx(hwpx_file, output_file)
        if success:
            hwpx_success += 1
            hwpx_total_sections += sections
        else:
            hwpx_fail += 1
    
    # 최종 요약
    print("\n" + "="*80)
    print("📊 HWPX 텍스트화 작업 완료 요약")
    print("="*80)
    print(f"✅ HWPX 파일: {hwpx_success}/{len(hwpx_files)}개 성공 ({hwpx_total_sections} 섹션)")
    if hwpx_fail > 0:
        print(f"❌ 실패: {hwpx_fail}개")
    print(f"\n📁 출력 위치: {HWPX_OUTPUT_DIR}")
    print("="*80 + "\n")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n⚠️  사용자에 의해 중단되었습니다.")
        sys.exit(1)
    except Exception as e:
        print(f"\n\n❌ 예상치 못한 오류 발생:")
        print(traceback.format_exc())
        sys.exit(1)
